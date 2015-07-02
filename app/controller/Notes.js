Ext.define('Notes.controller.Notes', {
 
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            // lookup our views by xtype ('noteslistview' in this case)
            notesListView: 'noteslistview',     // will be able to use 
                                                // getNotesListView method
            noteEditorView: {                   // getNoteEditorView method
                selector: 'noteeditorview',
                autoCreate: true,
                xtype: 'noteeditorview'
            }
            
        },
        control: { // here we define event handlers
            notesListView: {
                newNoteCommand: 'onNewNoteCommand',
                editNoteCommand: 'onEditNoteCommand'
            }
        }
    },
    slideLeftTransition: {
            type: 'slide',
            direction: 'left'
    },
 
    // Base class methods.
    launch: function () {
        this.callParent(arguments);
        console.log('launch');
    },
    init: function () {
        this.callParent(arguments);
        console.log('init');
    },

    onNewNoteCommand: function() {
        //
        console.log('controller says: onNewNoteCommand');

        var now = new Date();
        var noteId = (now.getTime()).toString() + this.getRandomInt(0,100).toString();

        var newNote = Ext.create('Notes.model.Note', {
                id: noteId,
                dateCreated: now,
                title: '',
                narrative: ''
            });

        this.activateNoteEditor(newNote);
    },

    onEditNoteCommand: function(list, record) {
        console.log('controller says: editNoteCommand');

    },

    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    activateNoteEditor: function(o) {
        var noteEditorView = this.getNoteEditorView();
        noteEditorView.setRecord(o);

        console.log(noteEditorView);
        console.log(this.slideLeftTransition);

        Ext.Viewport.animateActiveItem(noteEditorView, this.slideLeftTransition);
    }
});
