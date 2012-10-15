mainController = function($scope, $http){
    $scope.executeSearch = function(){
        alert(1);
      var url = 'http://search.twitter.com/search.json?q=';
        +$scope.query
        + '&callback=JSON_CALLBACK';
        $http.jsonp(url).success(function(data){
            alert(data.results);
            console.log(data.results);
           $scope.results = data.results;
        });
    };
};
