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
            },
            noteEditorView: {
                backHomeCommand: 'onBackHomeCommand',
                saveNoteCommand: 'onSaveNoteCommand',
                deleteNoteCommand: 'onDeleteNoteCommand'
            }
        }
    },
    slideLeftTransition: {
            type: 'slide',
            direction: 'left'
    },
    slideRightTransition: {
            type: 'slide',
            direction: 'right'
    },
 
    // Base class methods.
    launch: function () {
        this.callParent(arguments);
        console.log('launch');

        var notesStore = Ext.getStore('Notes');
        notesStore.load();
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

    onEditNoteCommand: function(record) {
        this.activateNoteEditor(record);
    },

    onSaveNoteCommand: function() {
        console.log('controller says: onSaveNoteCommand');

        var noteEditorView = this.getNoteEditorView();
        var currNote = noteEditorView.getRecord();
        var newValues = noteEditorView.getValues();

        currNote.set('title', newValues.title);
        currNote.set('narrative', newValues.narrative);

        var status = currNote.validate();

        if (!status.isValid()) {
            Ext.Msg.alert('Invalid data!', 
                    status.getByField('title')[0].getMessage(), 
                    Ext.emptyFn
                );
            currNote.reject();
            return;
        }

        console.log(currNote.data);

        var notesStore = Ext.getStore('Notes');
        if (! notesStore.findRecord('id', currNote.data.id)) {
            notesStore.add(currNote);
        }

        notesStore.sync();
        notesStore.sort({property: 'dateCreated', direction: 'DESC'});

        this.activateNotesList();
    },

    onDeleteNoteCommand: function() {
        console.log('controller says: onDeleteNoteCommand');


        var noteEditorView = this.getNoteEditorView();
        var currNote = noteEditorView.getRecord();
        var notesStore = Ext.getStore('Notes');
        
        notesStore.remove(currNote);
        notesStore.sync();

        this.activateNotesList();
    },

    onBackHomeCommand: function() {
        console.log('controller says: onBackHomeCommand');
        this.activateNotesList();
    },

    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    activateNoteEditor: function(o) {
        var noteEditorView = this.getNoteEditorView();
        noteEditorView.setRecord(o);

        Ext.Viewport.animateActiveItem(noteEditorView, this.slideLeftTransition);
    },

    activateNotesList: function() {
        Ext.Viewport.animateActiveItem(this.getNotesListView(), this.slideRightTransition);
    }
});
