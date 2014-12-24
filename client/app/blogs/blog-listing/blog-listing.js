'use strict';

angular.module('angularLoginBlogApp')
.directive('blogListing', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/blogs/blog-listing/blog-listing.html'
  };
});
