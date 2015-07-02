Ext.define('Notes.store.Notes', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Notes.model.Note',
		data: [
			{title: 'Title 1', narative: 'Narative A'},
			{title: 'Title 2', narative: 'Narative B'}
		],
		autoLoad: true,
		sorters: [
			{property: 'dateCreated', direction: 'DESC'}
		]
	}
});