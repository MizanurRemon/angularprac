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

    $scope.msg = "Animals:: ";

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

    /*$scope.products = [{
            name: "Shirt",
            types: ['XL', 'L', 'XXL'],
            rating: 4.5,
            color: ['green', 'red', 'yellow'],
            image: "https://images-ssl.gotinder.com/6337215eedb6ed0100496fb5/original_c17967e2-52d6-4b3b-9b74-23b2463cfef1.jpeg"
        },
        {
            name: "Polo",
            types: ['XL', 'L', 'XXL'],
            rating: 3.7,
            color: ['green', 'red', 'yellow'],
            image: "https://images-ssl.gotinder.com/6337215eedb6ed0100496fb5/320x400_08eea09d-b3aa-4ec3-9c82-960a374c74db.jpg"
        },
        {
            name: "T Shirt",
            types: ['XL', 'L', 'XXL'],
            rating: 4.2,
            color: ['green', 'red'],
            image: "https://images-ssl.gotinder.com/6337215eedb6ed0100496fb5/original_08eea09d-b3aa-4ec3-9c82-960a374c74db.jpeg"
        },
    ]
    console.log(angular.toJson($scope.products))
    $http.get('../data/products.json').success(function (data) {

        $scope.products = data

        console.log("hi")
    });*/

    $http({
        method: 'GET',
        // url: '../data/products.json'
        url: 'https://dummyjson.com/products?limit=10'
    }).then(function (response) {
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