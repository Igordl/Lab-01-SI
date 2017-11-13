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
	$scope.artistasProcurados = [];
	$scope.artistaSelecionado = "";
	$scope.mostraInfo = false;
	$scope.mostraListBusca = false;
	$scope.artistaMostra = {nome: 'Nome do artista', img: '../img/Profil_licnosti.png'};
	$scope.defaultImg = '../img/Profil_licnosti.png';
	

	$scope.addArtista = function(artista) {
		var existe = false;
		$scope.artistaMostraFunc(artista);
	    for (var i = 0; i < $scope.artistas.length; i++) {
	       if($scope.artistas[i].nome === artista.nome && existe === false){
	          alert("Artista já existente!");
	          existe = true;
	       }
	    }

	    if(existe === false){

	        artista.albuns = [];
	        artista.ultimaMusica = "Nenhuma música ouvida!";
	        artista.nota ="-" ;
	        $scope.artistas.push(artista);
	    }
	    console.log($scope.artistas);
	    delete $scope.artista;
	}

	$scope.artistaMostraFunc = function(artista){
		if(artista.img === ''){
			$scope.artistaMostra.nome = artista.nome;
			$scope.artistaMostra.img = $scope.defaultImg;
		}
		else{
			$scope.artistaMostra.nome = artista.nome;
			$scope.artistaMostra.img = artista.img;

		}
	}

	$scope.buscarArtista = function(artistaBuscado){
		$scope.artistasProcurados = [];
		$scope.mostraListBusca = true;
		$scope.mostraInfo = false;

      for (var i = 0; i < $scope.artistas.length; i++) {
        if($scope.artistas[i].nome.indexOf(artistaBuscado) !== -1){
          $scope.artistasProcurados.push($scope.artistas[i]);
          delete $scope.busca;
        }
      }
   
	}

	$scope.addNota = function(nota){
		$scope.artistaSelecionado.nota = nota;

	}

	$scope.ultimaMusica = function(ultimaMusica){
		$scope.artistaSelecionado.ultimaMusica = ultimaMusica;
	}

	$scope.mostraArtista = function(arts){
		$scope.artistaSelecionado = arts;
		$scope.mostraInfo = true;
		$scope.mostraListBusca = false;

	}



	$scope.addFavoritos = function(artista){
		  var jaAdicionado = false;

      for (var i = 0; i < $scope.favoritos.length; i++) {
        if ($scope.favoritos[i].nome === artista.nome && jaAdicionado) {
          alert("Artista já foi adicionado a lista de favoritos!");
          jaAdicionado = true;

        }
      }

      if(!jaAdicionado){
        $scope.favoritos.push(angular.copy(artista));
        alert("Artista adicionado com sucesso!");
      }
		
	}

	$scope.temFavoritos = function(){
		if($scope.favoritos.length > 0){
			return true;
		}
		return false;
	}
	
	$scope.removeFavoritos = function(artista){
		 
      var naoExcluido = true;

      for (var i = $scope.favoritos.length -1; i >= 0; i--) {
        if($scope.favoritos[i].nome === artista.nome && naoExcluido){
          $scope.favoritos.splice(i,1);
          naoExcluido = false;
        }
      }
	}
	
		
	
}]);