angular.module('travelApp', [
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ui.select',
        require('../compositions/main-module.js')
    ])
    .config(require('../routes/routes'));