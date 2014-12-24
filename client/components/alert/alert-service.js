angular.module('angularLoginBlogApp').
  factory('AlertService', function($timeout){
    return {
      // {{ msg : '', type: ''}}
      alerts: [],

      show: function(message, timeout){
        this.alerts.push(message);

        if(timeout)
          (function(alerts){

            $timeout(function(){
              alerts.shift();
            }, timeout);

          })(this.alerts);

      }
    };
  });
