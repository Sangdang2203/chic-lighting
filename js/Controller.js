var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "Home.html",
            controller: "myCtrl"
        })
        .when("/product", {
            templateUrl: "Product.html",
            controller: "myCtrl"
        })
        .when("/about", {
            templateUrl: "AboutUs.html",
            controller: "myCtrl"
        })
        .when("/gallery", {
            templateUrl: "Gallery.html",
            controller: "myCtrl"
        })
        .when("/contact", {
            templateUrl: "ContactUs.html",
            controller: "myCtrl"
        })
        .when("/CellingLights", {
            templateUrl: "CellingLights.html",
            controller: "myCtrl"
        })
        .when("/WallLights", {
            templateUrl: "WallLights.html",
            controller: "myCtrl"
        })
        .when("/Lamps", {
            templateUrl: "Lamps.html",
            controller: "myCtrl"
        })
        .when("/OutdoorLights", {
            templateUrl: "OutdoorLights.html",
            controller: "myCtrl"
        })
        .when("/Fans", {
            templateUrl: "Fans.html",
            controller: "myCtrl"
        })
        .when("/HomeAccent", {
            templateUrl: "HomeAccent.html",
            controller: "myCtrl"
        })
        .when("/SpotLights", {
            templateUrl: "SpotLights.html",
            controller: "myCtrl"
        })
        .when("/DecorationLights", {
            templateUrl: "DecorationLights.html",
            controller: "myCtrl"
        })
        .when("/SmartLights", {
            templateUrl: "SmartLights.html",
            controller: "myCtrl"
        })
        .when("/FAQ", {
            templateUrl: "FAQ.html",
            controller: "myCtrl"
        })
        .when("/Register", {
            templateUrl: "SignUp.html",
            controller: "myCtrl"
        })
        .when("/Login", {
            templateUrl: "SignIn.html",
            controller: "myCtrl"
        }).otherwise({
            redirectTo: '/home'
        });
});

myApp.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('json/products.json').then(function(response) {
        $scope.products = response.data
    })
}]);