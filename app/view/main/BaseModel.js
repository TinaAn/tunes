Ext.define('Tunes.view.main.BaseModel', {
    extend: 'Ext.app.ViewModel',
    requires: ['Tunes.model.Tune'],
    stores: {
        tunes: {
            model: 'Tunes.model.Tune',
            autoLoad: true,
			sorters: ['sortArtist']
        }
    }
});