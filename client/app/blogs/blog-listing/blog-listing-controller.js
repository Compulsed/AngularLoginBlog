  'use strict';

  angular.module('angularLoginBlogApp')
  .controller('BlogListingController', function($scope, $http, $timeout, AlertService, Auth, $log) {
    $scope.oneAtATime = true;

    $scope.isAdmin = Auth.isAdmin;


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

    $scope.itemsPerPage = 10;
    $scope.currentPage = 1;

    // Request data
    $scope.posts = [];

    $scope.pagination = {
      next: new Date(0),
      previous: new Date(0),
      move: 0
    };

    setupData();

    // Pagnation
    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);
      setupData();
    };

    function setupData(){
      $http({
        method: 'GET',
        url: '/api/posts',
        params: {
          info: true,
          limit: $scope.itemsPerPage,
          next: $scope.pagination.next,
          previous: $scope.pagination.previous,
          currentPage: $scope.currentPage,
        }
      })
      .success(function(posts) {
        console.table(posts.data);

        // Assign data to be rendered
        $scope.posts = posts.data;

        // Update the total items to be rendered
        $scope.totalItems = posts.info.totalItems;

        $scope.totalPages = Math.ceil($scope.totalItems / $scope.itemsPerPage);

        // Update pagnation positions
        $scope.pagination.previous = $scope.posts[0].posted;
        $scope.pagination.next = $scope.posts[$scope.posts.length -1].posted;

        // Dirty
        $timeout(function(){
          $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
          });
        }, 200);


      });
    }


  });
