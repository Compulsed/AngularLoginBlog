'use strict';

angular.module('angularLoginBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('project', {
        url: '/project',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController'
      });
  });
