angular.module("Meu app").controller("controller", function($scope, $http){
	$scope.seriesPerfil = [];
	$scope.seriesWatchList = [];
	$scope.seriesEncontradas = [];
	$scope.existeSerie = false;
	$scope.tituloMeuPerfil = "Suas lista de series:";
	$scope.sinopse;


	$scope.mostraDetalhes = function(serie){

		$scope.seriesPerfil.forEach(function(element) {
			if (serie.imdbID === element.imdbID) {
				$scope.sinopse = element.Plot;
			}
			
		}, this);
		
		
	
	}

	$scope.pesquisaSerie = function(serie){
		$http.get("http://www.omdbapi.com/?s="+serie+"&type=series&apikey=93330d3c").then(successCallback, errorCallback);

		function successCallback(response){
			console.log(response);

			if (response.data.Response === 'True') {
				$scope.seriesEncontradas = response.data.Search;
				console.log($scope.seriesEncontradas);
				$scope.existeSerie = true;

			}else{
				alert("Opa, não achei!");
			}
		}
		function errorCallback(response){
			alert("Atualize a pagina :)");
		}


	}

	$scope.addWatchlist = function(serie){
		$scope.jaTa = 0;
		$scope.i = 0;

		$scope.seriesWatchList.forEach(function(element) {

			if (element === serie) {
				$scope.i = 1;
			}
				
		}, this);

		$scope.seriesPerfil.forEach(function(element) {
				if (element === serie) {
					$scope.jaTa = 1;
				} 
			}, this);

		if ($scope.i === 0 && $scope.jaTa ===0) {
			$scope.seriesWatchList.push(serie);
		} else {
			alert("Opa! Essa ja foi adicionada!");
		}

	}

	
	$scope.removerSerieWatch = function(serie){
		$scope.indice;
		decisao = confirm("Deseja remover essa serie?");
		
		if (decisao){
			$scope.indice = $scope.seriesWatchList.indexOf(serie);
			$scope.seriesWatchList.splice($scope.indice,1);
		} 
	
	}


	$scope.removerSerie = function(serie){
		$scope.indice;
		decisao = confirm("Deseja remover essa serie?");
		
		if (decisao){
			$scope.indice = $scope.seriesPerfil.indexOf(serie);
			$scope.seriesPerfil.splice($scope.indice,1);
		} 
			

		console.log($scope.seriesPerfil);
	}

	$scope.addSerie = function(serie){
		$scope.i = 0;
		$scope.indiceDeletar;

		$scope.seriesPerfil.forEach(function(element) {
			if (element === serie) {
				$scope.i = 1;
			}
		}, this);

		if($scope.i !== 0){
			alert("Opa! Essa ja foi adicionada!");
			
		}else if($scope.i ===0) {

			for (var indice = 0; indice < $scope.seriesWatchList.length; indice++) {
				$scope.indice = $scope.seriesWatchList.indexOf(serie);
				$scope.seriesWatchList.splice($scope.indiceDeletar,1);
				
			}
			$http.get("http://www.omdbapi.com/?i="+serie.imdbID+"&plot=full&apikey=93330d3c").then(successCallback, errorCallback);
            function successCallback(response) {
                 $scope.seriesPerfil.push(response.data);
            }
            function errorCallback(error) {
                alert(error);
            }

			
		}else{
			 $http.get("http://www.omdbapi.com/?i="+serie.imdbID+"&plot=full&apikey=93330d3c").then(successCallback, errorCallback);
            function successCallback(response) {
                console.log(response.data);
                response.data.notaPessoa = "-";
                response.data.ultimoEp = "-";
                 $scope.seriesPerfil.push(response.data);
            }
            function errorCallback(error) {
                alert(error);
            }
		}
				
	}
	

});