/**
 * Initializing the Login Module for Tyra App
 * @type [angular module]
 */
angular.module('tyraApp.dummy', []);

angular.module('tyraApp.dummy').config(['$routeProvider', function($routeProvider) {
				
		$routeProvider
			.when("/dummy", {
				controller: 'dummyController',
				templateUrl: 'ng-app/dummy/view.html',
			});
	}
]);

/**
 * Controller for view tables page
 */
angular.module('tyraApp.dummy').controller('dummyController', function ($scope, $rootScope) {
	$rootScope.title = "Tyra App | Categories";
	$rootScope.bodyClass='skin-blue';
});