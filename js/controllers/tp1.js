angular.module('GIS')
.controller('Tp1Ctrl', ['$scope', function($scope) {
	$scope.map = {};
	$scope.markers = [];
	$scope.line = {};

	$scope.mapOptions = {
		center: new google.maps.LatLng(-34.5986488535611, -58.42001974582672),
		zoom: 13,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	$scope.resetMarkers = function() {
		deleteLine();
		angular.forEach($scope.markers, function(marker) {
			marker.setMap(null);
		});
		$scope.markers = [];
	};

	var deleteLine = function() {
		if (!$.isEmptyObject($scope.line)) {
			$scope.line.setMap(null);
		}
	};

	var drawLine = function() {
		if ($scope.markers.length == 2) {
			deleteLine();
			$scope.line = new google.maps.Polyline({
				path: [$scope.markers[0].getPosition(), $scope.markers[1].getPosition()],
				map: $scope.map
			})
		}
	};

	$scope.addMarker = function($event) {
		if ($scope.markers.length < 2) {
			var marker = new google.maps.Marker({
				draggable: true,
				map: $scope.map,
				position: $event.latLng
			});
			marker.position_changed = function() {
				drawLine();
			};
			$scope.markers.push(marker);
			drawLine();
		}
	};
}]);