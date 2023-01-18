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
        });
    });