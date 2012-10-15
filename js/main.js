mainController = function($scope, $http){
    $scope.executeSearch = function(){
      var url = 'http://search.twitter.com/search.json?q='
        +$scope.query
        + '&callback=JSON_CALLBACK';
        $http.jsonp(url).success(function(data){
           $scope.results = data.results;
        });
    }
}
