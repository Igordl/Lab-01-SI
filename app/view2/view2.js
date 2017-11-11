'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl' , ['$scope', function($scope) {

	$scope.artistas = [
		["Maiara e Maraisa",[["Maiara e Maraisa ao vivo em Gôiania","2016",[["Medo bobo","3:16"]]]],
		"img/MeM.jpg"
		],

		["Simone e Simaria",[["Simone e Simaria ao vivo no PP","2016",[["Regime fechado","3:49"]]]],
		"img/SeS.jpg"],

		["Marilia Mendonça",[["Marilia Mendonça ao vivo em Parque do povo","2016",[["Alô porteiro","2:35"]]]],
		"img/MariliaM.jpg"]
	];

	$scope.playList = [];
	

	$scope.informacoesCompletas = function(){
		if($scope.artista != ''&&
			$scope.album != ''&&
			$scope.musica != ''&&
			$scope.anoDeLancamento != ''&&
			$scope.duracao != ''){
			return true;
		}
		else{
			return false;
		}
	}


	$scope.addMusica = function(){
		for(var i = 0; i < $scope.artistas.length; i++){
			if($scope.artistas[i][0] == $scope.artista){
				console.log($scope.artistas[i][0] == $scope.artista);
				for(var j = 0; j < $scope.artistas[i][1].length; j++){
					if($scope.artistas[i][1][j][0] == $scope.album){
						for(var k = 0; k < $scope.artistas[i][1][j][2].length; k++){
							if($scope.artistas[i][1][j][2][k][0] == $scope.musica){
								alert("Música existente.")
								return;
							}
							else{
								$scope.artistas[i][1][j][2].push([$scope.musica, $scope.duracao]);
								return;

							}
					}
					
					
				}else{
						console.log($scope.artistas[i][0] == $scope.artista)
							$scope.artistas[i][1].push([$scope.album, $scope.anoDeLancamento,
								[[$scope.musica, $scope.duracao]]]);

						return;
					}
			}
		}else{
			console.log($scope.artista)
			$scope.artistas.push([
				$scope.artista,[[
				$scope.album,$scope.anoDeLancamento,[[
				$scope.musica,$scope.duracao]]]],
				$scope.img
				]);
			return;

			}
		}
	}

}]);
