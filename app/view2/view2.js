'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl' , ['$scope', function($scope) {


	$scope.artista = '';
	$scope.album = '';
	$scope.musica = '';
	$scope.anoDeLancamento = '';
	$scope.duracao = '';
	$scope.img = '';

	


	$scope.artistas = [
		["Maiara e Maraisa",
		"Maiara e Maraisa ao vivo em Gôiania",
		"Medo bobo",
		"2016",
		"3:16",
		"img/MeM.jpg"
		],

		["Simone e Simaria",
		"Simone e Simaria ao vivo no Parque do povo",
		"Regime fechado",
		"2016",
		"3:49",
		"img/SeS.jpg"],

		["Marilia Mendonça",
		"Marilia Mendonça ao vivo em Parque do povo",
		"Alô porteiro",
		"2016",
		"2:35",
		"img/MariliaM.jpg"]
	];
	
}]);