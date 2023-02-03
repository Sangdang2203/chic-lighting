var app = angular.module("myApp", ["ngRoute"]);
    app.config(function($routeProvider){
        $routeProvider
        .when ("/",{
            templateUrl : "Home.html"
        })
        .when ("/product",{
            templateUrl : "Product.html",
            controller : "myCtrl"
        })
        .when ("/about",{
            templateUrl : "AboutUs.html",
            controller : "myCtrl"
        })
        .when ("/contact",{
            templateUrl : "ContactUs.html",
            controller : "myCtrl"
        })
        .when ("/signin",{
            templateUrl : "SignIn.html",
            controller : "myCtrl"
        })
        .when ("/CellingLights",{
            templateUrl : "CellingLights.html",
            controller : "myCtrl"
        })
        .when ("/WallLights",{
            templateUrl : "WallLights.html",
            controller : "myCtrl"
        })
        .when ("/Lamps",{
            templateUrl : "Lamps.html",
            controller : "myCtrl"
        })
        .when ("/OutdoorLights",{
            templateUrl : "OutdoorLights.html",
            controller : "myCtrl"
        })
        .when ("/Fans",{
            templateUrl : "Fans.html",
            controller : "myCtrl"
        })
        .when ("/HomeAccent",{
            templateUrl : "HomeAccent.html",
            controller : "myCtrl"
        })
        .when ("/SpotLights",{
            templateUrl : "SpotLights.html",
            controller : "myCtrl"
        })
        .when ("/DecorationLights",{
            templateUrl : "DecorationLights.html",
            controller : "myCtrl"
        })
        .when ("/SmartLights",{
            templateUrl : "SmartLights.html",
            controller : "myCtrl"
        });
        
    });

    app.controller('myCtrl', function($scope, $http){
        $http.get('json/decorationLight.json').then(function(rspt){
            $scope.decoration = rspt.data.decoration;
        })
    });
       