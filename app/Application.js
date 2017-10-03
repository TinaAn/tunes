Ext.define('Tunes.Application', {
    extend: 'Ext.app.Application',
    name: 'Tunes',
    onAppUpdate: function() {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function(choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});