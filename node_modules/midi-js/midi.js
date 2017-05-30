require ('bufferjs/concat');
var ChildProcess = require('child_process');
var fs=require('fs');

/* midiout(path,callback)
 *
 * When path is not a regular file, a stream is assumed (device, fifo, ..)
 * eg: 	var midiout=new midi.output('/dev/snd/midiC3P0');
 * 		(you can use module snd-virmidi to create virtual devices and
 * 		connect them from and to the midi interface using "aconnect")
 *
 * Else a command name is assumed and a pipe is open
 * eg: var midiout=new midi.output("./midipipe");
 *
 * Then write binary data with send(), if callback is ommited it defaults to the midi.output() one.
 * eg: midiout.send(buffer); 
 * or: midiout.send([0xf0,0xf7]);
 *
 */

function midiout(path,callback) {

	var self=this;
	var fifo=[];
	var stderr;

	this.callback=callback?callback:function(err,msg) {
		if (err) {
			console.log(msg);
			process.exit(err);
		}
	}

	function stream_open(path) {
		self.stream=fs.createWriteStream(path);
		stream_eventbindings(self.stream);
	}

	function stream_eventbindings(stream) {
		stream.on('drain',function () {
			var busy=false;
			while (fifo.length) {
				var first=fifo.splice(0,1);
				if (!stream.write(first.buffer,first.callback)) {
					busy=true;
					break;
				}
			}
			self.busy=busy;
		});
	
		stream.on('error', function(err) {
			self.callback(err,'output error');
		});
	
		stream.on('close', function() {
			self.callback('close','midiout closed');
		});
	
	}

	function pipe_open(command,args) {

		var child = self.child = ChildProcess.spawn(command, args);

		child.on('error', function(err) {
			self.callback(err,stderr);
		});
	
		child.on('exit', function(code) {
			if (code > 0) {
				self.callback(code,stderr);
			} else {
				self.callback('exit','terminated');
			}
		});

		child.stderr.on('data', function(chunk) {
			if (!stderr)
				stderr=chunk;
			else
				stderr=Buffer.concat(stderr,chunk);
		});

		self.stream=child.stdin;
		stream_eventbindings(self.stream);

		child.stdout.end();

	}

	this.send=function(_buffer,callback) {
		var buffer=Buffer.isBuffer(_buffer)?_buffer:new Buffer(_buffer);
		if (!callback)
			callback=self.callback;

		if (self.busy) {
			console.log('busy');
			if (Buffer.isBuffer(_buffer)) {
				buffer=new Buffer(_buffer.length);
				_buffer.copy(buffer);
			}
			fifo.push({'buffer': buffer, 'callback': callback});

		} else {
			if (!self.stream.write(buffer,callback)) {
				self.busy=true;
			}
		}
	}

	if (!fs.statSync(path).isFile()) {
		stream_open(path);
	} else {
		pipe_open(path);
	}
}

/* midiin(path,callback)
 *
 * When path is not a regular file, a stream is assumed (device, fifo, ..)
 * eg: 	var midiin=new midi.input('/dev/snd/midiC3P0',midiin_callback);
 * 		(you can use module snd-virmidi to create virtual devices and
 * 		connect them from and to the midi interface using "aconnect")
 *
 * Else a command name is assumed and a pipe is open
 * eg: var midiin=new midi.input("./midipipein",midiin_callback);
 *
 * You can receive system exclusive messages with midiin.sysex(),
 * check the default callback below for an example.
 *
 */

function midiin(path,callback) {

	var self=this;
	var stderr;

	this.callback=callback?callback:function(err,msg){
		if (err) {
			console.log(msg)
			process.exit(err);

		} else {
			// actually i only need system exclusive messages :-)
			self.sysex(msg,function(buffer){
				var raw='';
				for (var i=0; i<buffer.length; ++i) {
					raw+=buffer[i].toString(16)+' ';
				}
				console.log(raw);
			});
		}

	}

	function stream_open(path) {
		self.stream=fs.createReadStream(path);
		stream_eventbindings(self.stream);
	}

	function stream_eventbindings(stream) {
		stream.on('data', function(chunk) {
			self.callback(0,chunk);
		});

		stream.on('error', function(err) {
			self.callback(err,'input error');
		});
	
		stream.on('close', function() {
			self.callback('close','midiin closed');
		});
	}

	function pipe_open(command, args) {

		var child = self.child = ChildProcess.spawn(command, args);

		child.on('error', function(err) {
			self.callback(err,stderr);
		});

		child.on('exit', function(code) {
			if (code > 0) {
				self.callback(code,stderr);
			} else {
				self.callback('exit','terminated');
			}
		});

		child.stderr.on('data', function(chunk) {
			if (!stderr)
				stderr=chunk;
			else
				stderr=Buffer.concat(stderr,chunk);
		});

		self.stream=child.stdout;
		stream_eventbindings(self.stream);

		child.stdin.end();
	}

	var sysex_buf;
	var sysex_start;
	var sysex_len;
	var sysex_offset;

	this.sysex=function(chunk,callback) {

		if (sysex_buf) {
			sysex_buf=Buffer.concat(sysex_buf,chunk);
		} else {
			sysex_start=-1; // start of sysex
			sysex_len=0;
			sysex_offset=0; // sysex_end search offset
			sysex_buf=chunk;
		}

		if (sysex_start<0) {
			for (var i=0; i<sysex_buf.length; ++i) {
				if (sysex_buf[i]==240) {
					sysex_start=i;
					break;
				}
			}
		}

		if (sysex_start>=0) {
			var sysex_end=null;
			if (!sysex_offset) {
				sysex_offset=sysex_start;
				sysex_len=2;
			}
			while (sysex_offset<sysex_buf.length) {
				if (sysex_buf[sysex_offset]<128) {
					++sysex_len;
				} else {
					if (sysex_buf[sysex_offset]==247) {
						sysex_end=sysex_offset;
						break;
					}
				}
				++sysex_offset;
			}

			if (sysex_end) {
				var sysex=new Buffer(sysex_len);
				sysex[0]=240;
				var index=1;
				for (var i=sysex_start; index<sysex_len-1; ++i) {
					if (sysex_buf[i]<128) {
						sysex[index]=sysex_buf[i];
						++index;
					}
				}
				sysex[sysex_len-1]=247;

				if (i+1==sysex_buf.length) {
					sysex_buf=null;
				} else { 
					sysex_buf=sysex_buf.slice(i);
				}
				sysex_start=-1;
				sysex_offset=0;

				callback.call(self,sysex);
			}

		} else {
			sysex_buf=null;
		}
	}

	if (!fs.statSync(path).isFile()) {
		stream_open(path);
	} else {
		pipe_open(path);
	}
}

module.exports = {
  output: midiout,
  input: midiin
};


