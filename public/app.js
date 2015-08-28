var app = angular.module('posts-workshop', ['ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/posts.html',
        controller: 'ApplicationController'
      });
  }]);

app.controller('ApplicationController', function($scope) {
  $scope.color = 'Blue';
});

app.controller('PostsController', function($scope, $http) {
  $scope.getPosts = function() {
    $http.get('/api/posts').then(function(posts) {
      $scope.posts = posts.data;
    })
  };
});
