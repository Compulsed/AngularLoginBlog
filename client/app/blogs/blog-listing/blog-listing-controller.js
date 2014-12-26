  'use strict';

  angular.module('angularLoginBlogApp')
  .controller('BlogListingController', function($scope, $http, $timeout, AlertService, Auth) {
    $scope.oneAtATime = true;

    $scope.posts = [];

    $scope.isAdmin = Auth.isAdmin;

    $http.get('/api/posts').success(function(posts) {

      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      $scope.posts = posts.sort(function(a,b){
        return new Date(b.posted) - new Date(a.posted);
      });


      // Dirty
      $timeout(function(){
        $('pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });
      }, 200);

    });

    $scope.remove = function(post, event){
      var target = angular.element(event.target);
      target.removeClass('glyphicon-remove');
      target.addClass('glyphicon-refresh');

      var panel = target.parents('.panel');

      $http.delete('/api/posts/' + post._id)
        .success(function(data, status, headers, config, statusText){

          AlertService.show({
            type: 'success',
            msg: 'Successfully deleted the article!'
          }, 5000);

          panel.fadeOut();
        })
        .error(function(data, status, headers, config, statusText){
          AlertService.show({
            type: 'danger',
            msg: 'Failed to delete the article!'
          }, 5000);

          console.log('failed to delete to /api/posts/' + post._id);
        });
    };

    $scope.edit = function(post, event){
      console.log('edit clicked!');
    }

    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };
  });
