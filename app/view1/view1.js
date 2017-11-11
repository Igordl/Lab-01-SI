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
	$scope.favoritos = [];

	$scope.artista = '';
	$scope.img = "../img/Profil_licnosti.png";

	$scope.addArtista = function() {
		if($scope.artista != '') {
			for(var i = 0; i< $scope.artistas.length; i++){
				if ($scope.artistas[i][0] == $scope.artista) {
					alert("Artista já existente.");
					return;
				}
			}
			$scope.artistas.push(
				[
				$scope.artista,
				$scope.img
				]);
			alert("Artista adicionado com sucesso!");
		}
		else{
			alert("Nome do artista invalido. :(");
		}
	}

	$scope.buscarArtista = function(){
		for (var i = 0; i < $scope.artistas; i++){
			if($scope.artistas[i][0] == $scope.busca){
				return $scope.artistas[i];
			}
		}
	}

	$scope.addFavoritos = function(nome,img,musica,nota){
		$scope.favoritos.push([nome,img,musica,nota]);
	}

	$scope.temFavoritos = function(){
		if($scope.favoritos.length > 0){
			return true;
		}
		return false;
	}
	$scope.removeFavoritos = function(arts){
		for (var i = 0; i < $scope.favoritos.length; i++) {
			if($scope.favoritos[i] == arts){
				delete $scope.favoritos[i];
			}
			}
		}
		
	
}]);