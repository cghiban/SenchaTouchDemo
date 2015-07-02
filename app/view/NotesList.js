Ext.define('Notes.view.NotesList', {
    extend: 'Ext.Container',
    requires:['Ext.TitleBar', 'Ext.dataview.List'],
    alias: 'widget.noteslistview',
    config: {
        layout: {
            type: 'fit'
        },
        items: [{
            xtype: 'titlebar',
            title: 'My Notes',
            docked: 'top',
            items: [
                {
                    xtype: 'button',
                    text: 'New',
                    ui: 'action',
                    itemId: 'newButton',
                    align: 'right'
                }
            ]
        },
        {
            xtype: 'list',
            store: 'Notes',
            itemId: 'notesList',
            itemCls: 'list-item-custom',
            loadingText: 'Loading notes..',
            emptyText: '<div>No notes found</div>',
            onItemDisclosure: true,
            grouped: true,
            itemTpl: '<div>{title}</div><div>{narative}</div>'
        }],
        listeners: [{
            delegate: '#newButton',
            event: 'tap',
            fn: 'onNewButtonTap'
        }, {
            delegate: '#notesList', // the itemId property
            event: 'disclose',
            fn: 'onNotesListDisclose'
        }]
    },
    onNewButtonTap: function() {
        console.log('Tap tap on New btn');
        this.fireEvent('newNoteCommand', this);
    },
    onNotesListDisclose: function(list, record, target, index, evt, options) {
        console.log('tapped on note w/ index ' + index);
        console.log('tapped on note w/ index ');
        console.log(record);
        this.fireEvent('editNoteCommand', record);
    }
});
