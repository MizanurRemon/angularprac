var myApp = angular.module('myApp', ['ngRoute']); //dependeny injection


myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/home', {
            templateUrl: '../views/home.html'
        })
        .when('/directory', {
            templateUrl: '../views/directory.html',
            controller: 'myController'
        }).otherwise({
            redirectTo: '/home'
        })
}]);

myApp.controller('myController', ["$scope", "$http", function ($scope, $http) {

    $scope.title = "NEW ARRIVAL";

    $scope.datas = ['cow', 'sheep', 'goat'];

    $scope.sortItem = ['name', 'rating']



    $scope.addProducts = function () {

        $scope.products.push({
            name: $scope.newproducts.name,
            types: ['XL', 'L', 'XXL'],
            rating: parseInt($scope.newproducts.rating),
            color: ['green', 'red', 'yellow']
        })

        window.alert("added!");
        $scope.addProducts.name = ""
        $scope.addProducts.rating = ""



    }

    $http({
        method: 'GET',
        url: "https://dummyjson.com/products?limit=20",
        //url:"https://dummyapi.io/data/v1/post?limit=10",
        // headers: {
        //     "app-id": "63cd111ff805cea1c4e8e6a3",

        // }
    }).then(function (response) {

        //console.log(angular.toJson(response))
        console.log(response, 'res');
        $scope.products = response.data['products'];
    }, function (error) {
        console.log(error, 'can not get data.');
    });



    $scope.removeItem = function (product) {

        var removeItem = $scope.products.indexOf(product);
        $scope.products.splice(removeItem, 1);
    }



}]);