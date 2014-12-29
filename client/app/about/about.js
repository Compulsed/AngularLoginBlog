'use strict';

angular.module('angularLoginBlogApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController'
      });
  });

  angular.module('angularLoginBlogApp').controller('PaginationDemoCtrl2', function ($scope, $log) {
    $scope.totalItems = 64;
    $scope.currentPage = 4;
    //
    // $scope.setPage = function (pageNo) {
    //   $scope.currentPage = pageNo;
    // };
    //
    // $scope.pageChanged = function() {
    //   $log.log('Page changed to: ' + $scope.currentPage);
    // };

    // $scope.maxSize = 5;
    // $scope.bigTotalItems = 175;
    // $scope.bigCurrentPage = 1;
  });
