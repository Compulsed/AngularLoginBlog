'use strict';

angular.module('angularLoginBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blogs/blog', {
        url: '/blog/:_id',
        templateUrl: 'app/blogs/blog/blog.html',
        controller: 'BlogController'
      });
  });
