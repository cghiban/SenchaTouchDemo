Ext.define('Notes.store.Notes', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Notes.model.Note',
		data: [
			{title: 'Title 1', narrative: 'Narrative A'},
			{title: 'Title 2', narrative: 'Narrative B'}
		],
		autoLoad: true,
		sorters: [
			{property: 'dateCreated', direction: 'DESC'}
		]
	}
});