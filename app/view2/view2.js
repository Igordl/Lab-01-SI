'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl' , ['$scope', function($scope) {

	$scope.playinfos = '';
	$scope.artistas = [];
	$scope.albuns = [];
	$scope.playList = [];
	$scope.ultArtAdd = false ;

	$scope.addMusica = function(musica){

		if($scope.albuns.length > 0){
			for (var i = 0; i < $scope.albuns.length; i++) {
				var albumLocal = $scope.albuns[i];
				if(albumLocal.nome === musica.album){
					for (var j = 0; j < albumLocal.musicas.length; j++) {
					 	var musicaLocal = albumLocal.musicas[j];
					 	console.log(musicaLocal);
						 	if(musicaLocal[0] === musica.nome){
						 		alert("Música já existe.");
						 	}else{
						 		albumLocal.musicas.push([musica.nome, musica.duracao]);
						 		return;
						 		$scope.ultArt(musica.artista);
						 	}

						}
					}
				}
			}
			else{
				$scope.albuns.push($scope.criaAlbum(musica));
				$scope.ultArt(musica.artista);
			}
			$scope.ultArt(musica.artista);
			
			//console.log($scope.artistas);
		
		
	}

	$scope.ultArt = function(nomeArtista){
		for (var i = 0; i < $scope.artistas.length; i++) {
			if($scope.artistas[i].nome === nomeArtista){
				console.log($scope.artistas[i]);
				$scope.ultArtAdd = $scope.artistas[i];
			}
		}
	}



	$scope.criaAlbum = function(musica){
		//console.log("Criando album");
		var albumLocalMK = new Object;
		albumLocalMK.nome = musica.album;
		albumLocalMK.ano = musica.ano;
		albumLocalMK.artista = musica.artista;
		albumLocalMK.musicas = [[musica.nome , musica.duracao]];
		$scope.addAoArtista(albumLocalMK);
		return albumLocalMK;
	}

	$scope.addAoArtista = function(album){
		
		if($scope.artistas.length > 0){
			for (var i = 0; i < $scope.artistas.length; i++) {
				if($scope.artistas[i].nome === album.artista){
					$scope.artistas[i].albuns.push(album);
					return;
				}
			}

		}else{
			//console.log("add ao artista");
			var artistaLocalMK = new Object;
			artistaLocalMK.nome = album.artista;
			artistaLocalMK.albuns = [];
			artistaLocalMK.albuns.push(album);
			$scope.artistas.push(artistaLocalMK);
			
		}
	
	}

	$scope.temPlayList = function(){
		if($scope.playList.length > 0){
			return true;
		}
		return false;
	}

	
	
	$scope.criaPlaylist = function(playLista){
		  
		if(!$scope.temPlayList){
	      for (var i = 0; i < $scope.playList.length; i++) {
	        if ($scope.playList[i].nome === playLista.nome) {
	          alert("PlayList já existente.");
	          return;
	        }
	      }}else{
        $scope.playList.push(playLista);
        alert("PlayList criada com sucesso!");
      }
		
	}

	$scope.addMusicaAPLay = function(playlist, musicaAdd){
		for (var i = 0; i < $scope.playList.length; i++) {
	        if ($scope.playList[i].nome === playlist.nome) {
	          
				$scope.playList[i].musicas.push(musicaAdd);
	        }
	      }

	    
	    delete $scope.musicaAdd;
    }

    $scope.mostrarPlay = function(playlist){
    	var play = new Object;
    	play.nome = playlist.nome;
    	play.musicas = playlist.musicas;
    	$scope.playinfos = play;
    	console.log($scope.playinfos);
    }



		

		
}]);
