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
            controller: "ceilingListsController"
        })
        .when("/WallLights", {
            templateUrl: "WallLights.html",
            controller: "wallListsController"
        })
        .when("/Lamps", {
            templateUrl: "Lamps.html",
            controller: "lampListsController"
        })
        .when("/OutdoorLights", {
            templateUrl: "OutdoorLights.html",
            controller: "outdoorListsController"
        })
        .when("/Fans", {
            templateUrl: "Fans.html",
            controller: "fanListsController"
        })
        .when("/HomeAccent", {
            templateUrl: "HomeAccent.html",
            controller: "homeaccentListsController"
        })
        .when("/SpotLights", {
            templateUrl: "SpotLights.html",
            controller: "spotListsController"
        })
        .when("/DecorationLights", {
            templateUrl: "DecorationLights.html",
            controller: "decorationListsController"
        })
        .when("/SmartLights", {
            templateUrl: "SmartLights.html",
            controller: "smartListsController"
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
        })
        .otherwise({
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
}]);

//add data for each product at Home.html
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
//add data for each product at DecorationLights.html
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
//add data for each product at SmartLights.html
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
//add data for each product at SpotLights.html
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
//add data for each product at Fans.html
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
//add data for each product at Lamps.html
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
//add data for each product at WallLights.html
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
//add data for each product at CeilingLights.html
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
//add data for each product at OutdoorLights.html
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
//add data for each product at HomeAccent.html
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


myApp.filter("myFilter", function () {
    return function (item) {
       return item.filter((i) => i.image
)
    }
})

// Add data from ceilings.json & Filter by brand at CeilingLights.html
myApp.controller("ceilingListsController", ['$scope', '$http', function($scope, $http) {
    $http.get('json/ceilings.json').then(function(response){
        $scope.ceilings = response.data;
        $scope.filteredCeilings = $scope.ceilings
    })
    $scope.choose = function () {
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let cats = [];
        for (var checkbox of markedCheckbox) {
            cats.push(checkbox.value);
            }
        let data = $scope.ceilings;
            $scope.filteredCeilings = (cats.length == 0) ? data : data.filter(ceiling => cats.indexOf(ceiling.type1.toString()) >= 0);
        }
}])
// Add data from walls.json & Filter by brand at WallLights.html
myApp.controller("wallListsController", ['$scope', '$http', function($scope, $http) {
    $http.get('json/walls.json').then(function(response){
        $scope.walls = response.data;
        $scope.filteredWalls = $scope.walls
    })
    $scope.choose = function () {
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let cats = [];
        for (var checkbox of markedCheckbox) {
            cats.push(checkbox.value);
            }
        let data = $scope.walls;
            $scope.filteredWalls = (cats.length == 0) ? data : data.filter(wall => cats.indexOf(wall.type1.toString()) >= 0);
        }
}])

// Add data from lamps.json & Filter by brand at Lamps.html
myApp.controller("lampListsController", ['$scope', '$http', function($scope, $http) {
    $http.get('json/lamps.json').then(function(response){
        $scope.lamps = response.data;
        $scope.filteredLamps = $scope.lamps
    })
    $scope.choose = function () {
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let cats = [];
        for (var checkbox of markedCheckbox) {
            cats.push(checkbox.value);
            }
        let data = $scope.lamps;
            $scope.filteredLamps = (cats.length == 0) ? data : data.filter(lamp => cats.indexOf(lamp.type1.toString()) >= 0);
        }
}])

// Add data from fans.json & Filter by brand at Fans.html
myApp.controller("fanListsController", ['$scope', '$http', function($scope, $http) {
    $http.get('json/fans.json').then(function(response){
        $scope.fans = response.data;
        $scope.filteredFans = $scope.fans
    })
    $scope.choose = function () {
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let cats = [];
        for (var checkbox of markedCheckbox) {
            cats.push(checkbox.value);
            }
        let data = $scope.fans;
            $scope.filteredFans = (cats.length == 0) ? data : data.filter(fan => cats.indexOf(fan.type1.toString()) >= 0);
        }
}])

// Add data from homeaccents.json & Filter by brand at HomeAccent.html
myApp.controller("homeaccentListsController", ['$scope', '$http', function($scope, $http) {
    $http.get('json/homeaccents.json').then(function(response){
        $scope.homeaccents = response.data;
        $scope.filteredHomeaccents = $scope.homeaccents
    })
    $scope.choose = function () {
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let cats = [];
        for (var checkbox of markedCheckbox) {
            cats.push(checkbox.value);
            }
        let data = $scope.homeaccents;
            $scope.filteredHomeaccents = (cats.length == 0) ? data : data.filter(homeaccent => cats.indexOf(homeaccent.type1.toString()) >= 0);
        }
}])

// Add data from outdoors.json & Filter by brand at OutdoorLights.html
myApp.controller("outdoorListsController", ['$scope', '$http', function($scope, $http) {
    $http.get('json/outdoors.json').then(function(response){
        $scope.outdoors = response.data;
        $scope.filteredOutdoors = $scope.outdoors
    })
    $scope.choose = function () {
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let cats = [];
        for (var checkbox of markedCheckbox) {
            cats.push(checkbox.value);
            }
        let data = $scope.outdoors;
            $scope.filteredOutdoors = (cats.length == 0) ? data : data.filter(outdoor => cats.indexOf(outdoor.type1.toString()) >= 0);
        }
}])

// Add data from spots.json &  Filter by brand at SpotLights.html
myApp.controller("spotListsController", ['$scope', '$http', function($scope, $http) {
    $http.get('json/spots.json').then(function(response){
        $scope.spots = response.data;
        $scope.filteredSpots = $scope.spots
    })
    $scope.choose = function () {
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let cats = [];
        for (var checkbox of markedCheckbox) {
            cats.push(checkbox.value);
            }
        let data = $scope.spots;
            $scope.filteredSpots = (cats.length == 0) ? data : data.filter(spot => cats.indexOf(spot.type1.toString()) >= 0);
        }
}])

// Add data from smarts.json & Filter by brand at SmartLights.html
myApp.controller("smartListsController", ['$scope', '$http', function($scope, $http) {
    $http.get('json/smarts.json').then(function(response){
        $scope.smarts = response.data;
        $scope.filteredSmarts = $scope.smarts
    })
    $scope.choose = function () {
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let cats = [];
        for (var checkbox of markedCheckbox) {
            cats.push(checkbox.value);
            }
        let data = $scope.smarts;
            $scope.filteredSmarts = (cats.length == 0) ? data : data.filter(smart => cats.indexOf(smart.type1.toString()) >= 0);
        }
}])

// Add data from decorations.json & Filter by brand at DecorationLights.html
myApp.controller("decorationListsController", ['$scope', '$http', function($scope, $http) {
    $http.get('json/decorations.json').then(function(response){
        $scope.decorations = response.data;
        $scope.filteredDecorations = $scope.decorations
    })
    $scope.choose = function () {
        let markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let cats = [];
        for (var checkbox of markedCheckbox) {
            cats.push(checkbox.value);
            }
        let data = $scope.decorations;
            $scope.filteredDecorations = (cats.length == 0) ? data : data.filter(decoration => cats.indexOf(decoration.type1.toString()) >= 0);
        }
}])



    
