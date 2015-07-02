Ext.define('Notes.view.NoteEditor', {
    extend: 'Ext.form.Panel',
    requires: [
            'Ext.Toolbar', 'Ext.form.FieldSet',
            'Ext.form.Text', 'Ext.form.TextArea',
            'Ext.MessageBox'
        ],
    alias: 'widget.noteeditorview',
    config: {
        scrollable: 'vertical',

        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Edit Note',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: 'Back',
                        itemId: 'backButton',
                        align: 'left'
                    },
                    {
                        xtype: 'button',
                        ui: 'action',
                        text: 'Save',
                        itemId: 'saveButton',
                        align: 'right'
                    }
                ]
            },{
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        iconCls: 'trash',
                        iconMask: true,
                        itemId: 'deleteButton'
                    }
                ]
            },{
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'title',
                        label: 'Title',
                        required: true
                    }, {
                        xtype: 'textareafield',
                        name: 'narrative',
                        label: 'Narrative'
                    }
                ]
            }
        ]
    }
});
