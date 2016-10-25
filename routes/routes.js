export default function ($stateProvider, $urlRouterProvider) {
    'ngInject';

    var mainController = require('../components/main/main.js');
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../components/main/home.html',
            controller: mainController
        })
        .state('form', {
            url: '/form',
            templateUrl: '../components/main/main.html',
            controller: mainController
        })
        .state('form.step1', {
            url: '/step1',
            templateUrl: '../components/main/step1.html'

        })
        .state('form.step2', {
            url: '/step2',
            templateUrl: '../components/main/step2.html'
        })
        .state('form.step3', {
            url: '/step3',
            templateUrl: '../components/main/step3.html'

        });
}