console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command: ',command);
console.log('Yargs: ',argv);

if(command === 'add'){
    // console.log('Adding new note');
    var note = notes.addNote(argv.title, argv.body);
    if(note)
    {
        console.log("Note created");
        notes.logNote(note);
    }
    else
    {
        console.log("Note title taken");
    }
}else if(command === 'list'){
    // console.log('Listing all notes');
    notes.getAll();
}else if(command === 'read'){
    // console.log('Reading note');
    var note = notes.getNote(argv.title);
    if(note)
    {
        console.log("Note found");
        notes.logNote(note);
    }
    else
    {
        console.log("Note not found");
    }
}else if(command === 'remove'){
    // console.log('Removing note');
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
}else{
    console.log('Command not recognized');
}
