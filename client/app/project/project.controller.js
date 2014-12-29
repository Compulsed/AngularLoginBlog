'use strict';

angular.module('angularLoginBlogApp')
  .controller('ProjectController', function ($scope, $http) {

  });


angular.module('angularLoginBlogApp').
  controller('PaginationDemoCtrl', function ($scope, $log, $http) {

    $scope.itemsPerPage = 3;
    $scope.currentPage = 1;
    $scope.totalItems;


    // Request data
    $scope.posts = [];

    $scope.pagination = {
      next: new Date(0),
      previous: new Date(0)
    };

    setupData($scope);


    // Pagnation
    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      $log.log('Page changed to: ' + $scope.currentPage);

      setupData($scope);
    };


    // Accordion
    $scope.oneAtATime = true;
    $scope.status = {
      isFirstOpen: true,
      isFirstDisabled: false
    };


    function setupData($scope){
      $http({
        method: 'GET',
        url: '/api/posts',
        params: {
          info: true,
          limit: $scope.itemsPerPage,
          next: $scope.pagination.next,
          previous: $scope.pagination.previous
        }
      })
      .success(function(posts) {
        console.table(posts.data);
        console.log(posts);

        // Assign data to be rendered
        $scope.posts = posts.data;

        // Update the total items to be rendered
        $scope.totalItems = posts.info.totalItems;

        // Update pagnation positions
        $scope.pagination.previous = $scope.posts[0].posted;
        $scope.pagination.next = $scope.posts[$scope.posts.length -1].posted;

      });
    }

  });
