'use strict';

angular.module('angularLoginBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('blogs', {
        url: '/blogs',
        templateUrl: 'app/blogs/blogs.html',
        controller: 'BlogsController'
      });
  });
