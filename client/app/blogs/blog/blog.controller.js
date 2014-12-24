'use strict';

angular.module('angularLoginBlogApp')
  .controller('BlogController', function ($scope, $http, $stateParams, $timeout) {

    $scope.post = {
      title: '',
      contents: ''
    };

    $http.get('/api/posts/' + $stateParams._id).success(function(post) {
      $scope.post = post;

      // Dirty
      $timeout(function(){
        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });
      }, 200);

    });

});
