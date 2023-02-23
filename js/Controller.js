var myApp = angular.module("myApp", ["ngRoute"]);
myApp.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "Home.html",
            controller: "myCtrl"
        })
        .when("/product/:id", {
            templateUrl: "Product.html",
            controller: "productController"
        })
        .when("/decoration/:id", {
            templateUrl: "decorationProduct.html",
            controller: "decorationController"
        })
        .when("/smart/:id", {
            templateUrl: "smartProduct.html",
            controller: "smartController"
        })
        .when("/spot/:id", {
            templateUrl: "spotProduct.html",
            controller: "spotController"
        })
        .when("/ceiling/:id", {
            templateUrl: "ceilingProduct.html",
            controller: "ceilingController"
        })
        .when("/wall/:id", {
            templateUrl: "wallProduct.html",
            controller: "wallController"
        })
        .when("/fan/:id", {
            templateUrl: "fanProduct.html",
            controller: "fanController"
        })
        .when("/lamp/:id", {
            templateUrl: "lampProduct.html",
            controller: "lampController"
        })
        .when("/outdoor/:id", {
            templateUrl: "outdoorProduct.html",
            controller: "outdoorController"
        })
        .when("/homeaccent/:id", {
            templateUrl: "homeaccentProduct.html",
            controller: "homeaccentController"
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
//Add data from json file
myApp.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.productTypes = [
        {type: 'best', image: './image/home/hot.gif', name: 'Best Seller'}, 
        {type: 'promote', image: './image/home/hot.gif', name: 'Promotional Products'},
        {type: 'new', image: './image/NewProduct/NewIcon.gif', name: 'New Products'},
    ]

    $http.get('json/products.json').then(function(response) {
        $scope.products = response.data
    })

    $http.get('json/decorations.json').then(function(response) {
        $scope.decorations = response.data
    })

    $http.get('json/smarts.json').then(function(response) {
        $scope.smarts = response.data
    })

    $http.get('json/spots.json').then(function(response) {
        $scope.spots = response.data
    })

    $http.get('json/fans.json').then(function(response){
        $scope.fans = response.data
    })

    $http.get('json/lamps.json').then(function(response){
        $scope.lamps = response.data
    })

    $http.get('json/walls.json').then(function(response){
        $scope.walls = response.data
    })

    $http.get('json/ceilings.json').then(function(response){
        $scope.ceilings = response.data
    })

    $http.get('json/outdoors.json').then(function(response){
        $scope.outdoors = response.data
    })

    $http.get('json/homeaccents.json').then(function(response){
        $scope.homeaccents = response.data
    })
}]);

//add detailed data for each product page
myApp.controller('productController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/products.json').then(function(response) {
        const products = response.data.filter(product => {
            return product.id === parseInt($routeParams.id)
        })
        if (products.length > 0) {
            $scope.product = products[0] 
        }
    }) 
}]);

myApp.controller('decorationController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/decorations.json').then(function(response) {
        const decorations = response.data.filter(decoration => {
            return decoration.id === parseInt($routeParams.id)
        })
        if (decorations.length > 0) {
            $scope.decoration = decorations[0] 
        }
    }) 
}]);

myApp.controller('smartController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/smarts.json').then(function(response) {
        const smarts = response.data.filter(smart => {
            return smart.id === parseInt($routeParams.id)
        })
        if (smarts.length > 0) {
            $scope.smart = smarts[0] 
        }
    }) 
}]);

myApp.controller('spotController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/spots.json').then(function(response) {
        const spots = response.data.filter(spot => {
            return spot.id === parseInt($routeParams.id)
        })
        if (spots.length > 0) {
            $scope.spot = spots[0] 
        }
    }) 
}]);

myApp.controller('fanController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/fans.json').then(function(response) {
        const fans = response.data.filter(fan => {
            return fan.id === parseInt($routeParams.id)
        })
        if (fans.length > 0) {
            $scope.fan = fans[0] 
        }
    }) 
}]);

myApp.controller('lampController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/lamps.json').then(function(response) {
        const lamps = response.data.filter(lamp => {
            return lamp.id === parseInt($routeParams.id)
        })
        if (lamps.length > 0) {
            $scope.lamp = lamps[0] 
        }
    }) 
}]);

myApp.controller('wallController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/walls.json').then(function(response) {
        const walls = response.data.filter(wall => {
            return wall.id === parseInt($routeParams.id)
        })
        if (walls.length > 0) {
            $scope.wall = walls[0] 
        }
    }) 
}]);

myApp.controller('ceilingController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/ceilings.json').then(function(response) {
        const ceilings = response.data.filter(ceiling => {
            return ceiling.id === parseInt($routeParams.id)
        })
        if (ceilings.length > 0) {
            $scope.ceiling = ceilings[0] 
        }
    }) 
}]);

myApp.controller('outdoorController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/outdoors.json').then(function(response) {
        const outdoors = response.data.filter(outdoor => {
            return outdoor.id === parseInt($routeParams.id)
        })
        if (outdoors.length > 0) {
            $scope.outdoor = outdoors[0] 
        }
    }) 
}]);

myApp.controller('homeaccentController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    $http.get('json/homeaccents.json').then(function(response) {
        const homeaccents = response.data.filter(homeaccent => {
            return homeaccent.id === parseInt($routeParams.id)
        })
        if (homeaccents.length > 0) {
            $scope.homeaccent = homeaccents[0] 
        }
    }) 
}]);






    
