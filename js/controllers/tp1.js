angular.module('GIS')
.controller('Tp1Ctrl', ['$scope', function($scope) {
	$scope.map = {};
	$scope.markers = [];

	$scope.mapOptions = {
		center: new google.maps.LatLng(-34.5986488535611, -58.42001974582672),
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};


	$scope.addMarker = function($event) {
		debugger;
		$scope.markers.push(new google.maps.Marker({
			map: $scope.map,
			position: $event.latLng
		}));
	};

	$scope.openMarkerInfo = function(marker) {
		$scope.currentMarker = marker;
		$scope.currentMarkerLat = marker.getPosition().lat();
		$scope.currentMarkerLng = marker.getPosition().lng();
	};

	$scope.setMarkerPosition = function(marker, lat, lng) {
		marker.setPosition(new google.maps.LatLng(lat, lng));
	};

	$scope.event = function(a, b, c) {
		debugger;
	};
}]);