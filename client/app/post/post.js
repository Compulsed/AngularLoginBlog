'use strict';

angular.module('angularLoginBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('post', {
        url: '/post',
        templateUrl: 'app/post/post.html',
        controller: 'PostController'
      });
  });
