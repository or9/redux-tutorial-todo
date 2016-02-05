"use strict";

var notes = [];

read(initReadSuccess, initReadFail, "notes.json", { isPrivate: true });

module.exports = {
	write: write,
	read: read,
	remove: remove
};

function remove (note) {
	notes.slice(index, 1);
	write(writeFileSuccess, notes);
}

function write (callback, contents) {
	if (!contents) {
		return;
	}

	contents.id = notes.length;

	if (Array.isArray(notes)) {
		//notes = merge(notes, contents);
		console.log("it's an array so setting notes to contents", notes, contents);
		notes = contents;
	} else {
		console.log("writing single note to ", contents.id);
		notes.splice(contents.id, 1, contents);
	}

	function overwriteExisting (note) {
		return note.id === contents.id;
	}


	var filecontent = JSON.stringify(notes);
	console.log("writing notes: ", notes);

	gm.io.writeFile(callback,
			fail,
			"notes.json", 
			filecontent, 
			true, 
			{ isPrivate: true });
}

function read (callback) {
	gm.io.readFile(callback, "notes.json", { isPrivate: true });
}

function fail (code) {
	console.log("gmService failed ", code);
}

function initReadSuccess (fileContent) {
	notes = JSON.parse(fileContent) || [];
	console.log("notes initialized to ", notes);
}

function initReadFail (code) {
	notes = notes || [];
	console.log("init read failed ", code);
}

function merge (to) {
	var froms = Array.prototype.slice.call(arguments, 1);
	froms.forEach(function (fromthing) {
		to.map(function (item, index) {
			if (fromthing.id !== item.id) {
				return;
			}

			item = fromthing;
		});
	});
}
