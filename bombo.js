/**
 * An Angular module that lets you broadcast messages
 * @version v0.0.1 - 2016-05-18
 * @link https://github.com/kdlcruz/bombo
 * @author kdlcruz <kj_delacruz28@yahoo.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function (window, angular) {
angular
  .module('BomboModule', [])
  .factory('Bombo', function($rootScope) {
  	return {
      'prep': function(event, msg, log) {
        log = log || false;

        if (log === true) {
          console.log('bombo.prep:', event);  
        }
        
        this.message = msg;
        this.event = event;
        this.broadcast(log);
      },
      'broadcast': function(log) {
        if (log === true) {
          console.log('bombo.broadcast:', this.event);
        }
        $rootScope.$broadcast(this.event);
      }
    };
  });
})(window, window.angular);