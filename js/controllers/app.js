angular.module('GIS', [
	'ui'
])

.value('ui.config', {

})

.config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
	$routeProvider
		.when('/home/', {templateUrl: 'views/home.html'})
		.when('/tp1/', {templateUrl: 'views/tp1.html', controller: 'Tp1Ctrl'})
		.when('/tp2/', {templateUrl: 'views/tp2.html', controller: 'Tp2Ctrl'})
		.otherwise({redirectTo: '/home/'});
}])

.controller('AppCtrl', ['$scope', '$rootScope', '$location', '$http', function($scope, $rootScope, $location, $http) {
	$rootScope.errorMsg = '';

	$scope.$on('$routeChangeError', function(event, current, previous, rejection){
		if (!angular.isObject(rejection)) {
			rejection = {message: rejection, path: '/'}
		}
		$rootScope.errorMsg = rejection.message;
		$location.path(rejection.path);
	});

	$scope.hasPendingRequests = function () {
		return $http.pendingRequests.length > 0;
	};
}])
;