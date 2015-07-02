Ext.define('Notes.model.Note', {
	extend: 'Ext.data.Model',
	config: {
		idProperty: 'id',
		fields: [
			{name: 'id', type: 'int'},
			{name: 'dateCreated', type: 'date', dateFormat: 'c'},
			{name: 'title', type: 'string'},
			{name: 'narative', type: 'string'}
		],
		validation: [
			{ type: 'presence', field: 'id'},
			{ type: 'presence', field: 'dateCreated'},
			{ type: 'presence', field: 'field', message: 'Title is missing..'}
		]
	}
});