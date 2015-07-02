Ext.define('Notes.store.Notes', {
	extend: 'Ext.data.Store',
	requires: ['Ext.data.proxy.LocalStorage'],

	config: {
		model: 'Notes.model.Note',

		proxy: {
			type: 'localstorage',
			id: 'notes-app-store'
		},
		//autoLoad: true, // or use .load() from controller.launch()

		sorters: [
			{property: 'dateCreated', direction: 'DESC'}
		]
	}
});