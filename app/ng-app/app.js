
angular.module('tyraApp', [
		'ngRoute',
		'ui.bootstrap',
		'xeditable',
		'Parse',
		'tyraApp.blogg',
		'tyraApp.dummy'
	]);

angular.module('tyraApp').config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/menu', {
		controller:'menuController',
		templateUrl:'ng-app/partials/menu.html'
	})
	.otherwise("/blogg");
}]);

angular.module('tyraApp').run(function(editableOptions){
	editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

angular.module('tyraApp').controller('rootController', ['$rootScope', function($rootScope){
	$rootScope.bodyClass = 'skin-blue';
}]);