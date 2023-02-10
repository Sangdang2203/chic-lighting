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
        })
        .when ("/FAQ",{
            templateUrl : "FAQ.html",
            controller : "myCtrl"
        })
        .when ("/Register",{
            templateUrl : "SignUp.html",
            controller : "myCtrl"
        })
        .when ("/Login",{
            templateUrl : "SignIn.html",
            controller : "myCtrl"
        });
        
    });

    app.controller('myCtrl', function($scope, $http){
        $scope.decorationLight=[
        {
         "name":"LED neon wall mounted decoration.", 
         "brand":"OSIDEN", 
         "description":"Soft LED neon light operating temperature: 20℃-60℃ input voltage: 12V. Suitable for indoor and outdoor use; in the manufacture of logos, light boxes, LED letters.", 
         "img":"./image/DecorationLight/product_01.jpg", 
         "price": "$10.15"
        },
    
        { 
         "name":"LED string lights ball shaped cotton.", 
         "brand": "OSIDEN", 
         "description":"Wire lamps are handmade from cotton yarn. Bring soft light in the dark seasons. Unique designed wire lamp, perfect for party decoration, bedroom curtains, ... etc.", 
         "img":"./image/DecorationLight/product_02.jpg", 
         "price": "$3.05"
        },
    
        {
         "name":"Led wire rattan lights.", 
         "brand":"MASHANG", 
         "description":"Carefully made by hand, they are the perfect choice for floral and fabric decorations and even in a children's room. Ultra-thin soft wire with insulated rubber layer is easy to move and easy to store.", 
         "img":"./image/DecorationLight/product_03.jpg", 
         "price": "$2.95"
        },
    
        {
         "name":"Huta Edison ST64 4W Dimmer.",
         "brand":"HUTA", 
         "description":"Edison LED bulb has vintage design with LED strands and 2200K gold light for display color, suitable to decorate the housing space, cafes, cafes, restaurants. Bring a feeling of extreme relaxation.", 
         "img":"./image/DecorationLight/product_04.jpg", 
         "price": "$4.5"
        },
    
        {
         "name":"Decorative diamond monsky drop lights.", 
         "brand":"MONSKY", 
         "description":"High grade diamond drop decoration lights. Lamps made from high-end iron frames powder coated. Lampshades made of fabric give unique lighting. Size: lamp diameter 25cm.", 
         "img":"./image/DecorationLight/product_05.jpg", 
         "price": "$11.3"
        },
    
        {
         "name":"Spider-shaped monsky Marit drop lamp.", 
         "brand":"MONSKY", 
         "description":"Easy to choose low height adjustable lamp, easy to install. Product size: D810 mm. Modern lighting technology of led bulbs makes beautiful dining table lamps provide even light.", 
         "img":"./image/DecorationLight/product_06.jpg", 
         "price": "$28"
        }]
    });
       