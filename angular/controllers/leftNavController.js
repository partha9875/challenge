app.controller('leftNavController', ['$scope', 'people', function($scope, people) {
	people.success(function(data) {
		$scope.people = data.People;
	})
}]);