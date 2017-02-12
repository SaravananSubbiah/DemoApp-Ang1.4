'use strict';
var eventsApp = angular.module('eventsApp',['ngResource']);

// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: 'home',
            templateUrl: './partial/partial-home.html'
        })

            // nested list with custom controller
            .state('home.list', {
                url: '/list',
                templateUrl: './partial/partial-home-list.html',
                controller: "FirstController as first"
            })

            // nested list with just some random string data
            .state('home.paragraph', {
                url: '/paragraph',
                template: 'I could sure use a drink right now.'
            })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
           .state('about', {
                url: 'about',
                views: {

                    // the main template will be placed here (relatively named)
                    '': { templateUrl: './partial/partial-about.html' },

                    // the child views will be defined here (absolutely named)
                    'columnOne@about': { template: 'Look I am a column!' },

                    // for column two, we'll define a separate controller 
                    'columnTwo@about': { 
                        templateUrl: './partial/table-data.html',
                        controller: 'scotchController as second'
                    }
                }
                
            });

        }); // closes $routerApp.config()

routerApp.controller('FirstController', function($scope, greeting) {
                    var first = this;
                    first.greeting = greeting.message;
                    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle', first.greeting];
                }
);


// let's define the scotch controller that we call up in the about state
routerApp.controller('scotchController', function($scope, greeting) {
    var second = this;
    second.greeting = greeting.message;

    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});

routerApp.service('greeting', function() {
    
   var greeting = this;
   greeting.message = 'Welcome message';
       
    
});