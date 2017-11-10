'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {

	$scope.artistas = [];

	$scope.artista = '';

	$scope.addArtista = function() {
		if($scope.artista != '') {
			$scope.artistas.push($scope.artista);
			console.log($scope.artistas);
			alert("Artista adicionado com sucesso!");
		}
		else{
			alert("Nome do artista invalido. :(")
		}
	}
}]);