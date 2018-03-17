/**
 * Created by xminghaou on 2018/3/17.
 */
var app = angular.module('myapp', ['ngRoute'])
app.config(function ($routeProvider) {
    $routeProvider.
    when('/home', {
        template: '<h1>embedded html</h1>'
    }).
    when('/about', {
        templateUrl: 'html/partials/embedded.about.html',
        controller: 'PartialCtrl'
    }).
    otherwise({
        redirectTo: '/home'
    });
});
