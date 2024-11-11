var myApp = angular.module("myApp", ["ngRoute"]);
//begin: router
myApp.config(function ($routeProvider) {
  const routes = [
    { path: "/home", templateUrl: "Home.html", controller: "myCtrl" },
    { path: "/about", templateUrl: "AboutUs.html", controller: "myCtrl" },
    { path: "/gallery", templateUrl: "Gallery.html", controller: "myCtrl" },
    { path: "/contact", templateUrl: "ContactUs.html", controller: "myCtrl" },
    { path: "/faqs", templateUrl: "FAQ.html", controller: "myCtrl" },
    { path: "/cart", templateUrl: "cart.html", controller: "myCtrl" },
    { path: "/register", templateUrl: "SignUp.html", controller: "myCtrl" },
    { path: "/login", templateUrl: "SignIn.html", controller: "myCtrl" },
    {
      path: "/products/:name",
      templateUrl: "ProductDetails.html",
      controller: "productController",
    },
    {
      path: "/decoration-lights/:name",
      templateUrl: "ProductDetails.html",
      controller: "decorationController",
    },
    {
      path: "/smart-lights/:name",
      templateUrl: "ProductDetails.html",
      controller: "smartController",
    },
    {
      path: "/spot-lights/:name",
      templateUrl: "ProductDetails.html",
      controller: "spotController",
    },
    {
      path: "/ceiling-lights/:name",
      templateUrl: "ProductDetails.html",
      controller: "ceilingController",
    },
    {
      path: "/wall-lights/:name",
      templateUrl: "ProductDetails.html",
      controller: "wallController",
    },
    {
      path: "/fans/:name",
      templateUrl: "ProductDetails.html",
      controller: "fanController",
    },
    {
      path: "/lamps/:name",
      templateUrl: "ProductDetails.html",
      controller: "lampController",
    },
    {
      path: "/outdoor-lights/:name",
      templateUrl: "ProductDetails.html",
      controller: "outdoorController",
    },
    {
      path: "/home-accents/:name",
      templateUrl: "ProductDetails.html",
      controller: "homeaccentController",
    },
    {
      path: "/ceiling-lights",
      templateUrl: "CellingLights.html",
      controller: "ceilingListsController",
    },
    {
      path: "/wall-lights",
      templateUrl: "WallLights.html",
      controller: "wallListsController",
    },
    {
      path: "/lamps",
      templateUrl: "Lamps.html",
      controller: "lampListsController",
    },
    {
      path: "/outdoor-lights",
      templateUrl: "OutdoorLights.html",
      controller: "outdoorListsController",
    },
    {
      path: "/fans",
      templateUrl: "Fans.html",
      controller: "fanListsController",
    },
    {
      path: "/home-accent",
      templateUrl: "HomeAccent.html",
      controller: "homeaccentListsController",
    },
    {
      path: "/spot-lights",
      templateUrl: "SpotLights.html",
      controller: "spotListsController",
    },
    {
      path: "/decoration-lights",
      templateUrl: "DecorationLights.html",
      controller: "decorationListsController",
    },
    {
      path: "/smart-lights",
      templateUrl: "SmartLights.html",
      controller: "smartListsController",
    },
  ];

  routes.forEach(function (route) {
    $routeProvider.when(route.path, {
      templateUrl: route.templateUrl,
      controller: route.controller,
    });
  });

  $routeProvider.otherwise({
    redirectTo: "/home",
  });
});

myApp.controller("myCtrl", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.productModel = [
      {
        model: "best",
        name: "Best Seller",
      },
      {
        model: "promotion",
        name: "Promotion Products",
      },
      {
        model: "new",
        name: "New Products",
      },
    ];

    $http.get("json/products.json").then(function (response) {
      $scope.products = response.data;
    });
  },
]);

const fileName = "products";
const scopeVariable = "product";
const controllers = [
  { name: "productController", fileName, scopeVariable },
  { name: "decorationController", fileName, scopeVariable },
  { name: "smartController", fileName, scopeVariable },
  { name: "spotController", fileName, scopeVariable },
  { name: "fanController", fileName, scopeVariable },
  { name: "lampController", fileName, scopeVariable },
  { name: "wallController", fileName, scopeVariable },
  { name: "ceilingController", fileName, scopeVariable },
  { name: "outdoorController", fileName, scopeVariable },
  { name: "homeaccentController", fileName, scopeVariable },
];

function createController(controllerName, fileName, scopeVariableName) {
  myApp.controller(controllerName, [
    "$scope",
    "$http",
    "$routeParams",
    function ($scope, $http, $routeParams) {
      $http.get(`json/${fileName}.json`).then(function (response) {
        const data = response.data;
        const product = data.find(
          (product) => product.name === $routeParams.name
        );
        if (product) {
          $scope[scopeVariableName] = product;
          $scope.productImages = product.images.split(",");
          $scope.descArray = product.description.split(".,");
          $scope.selectedImage = $scope.productImages[0];
          $scope.changedImage = function (index) {
            $scope.selectedImage = index;
          };
        }
      });
    },
  ]);
}

controllers.forEach((controller) => {
  createController(
    controller.name,
    controller.fileName,
    controller.scopeVariable
  );
});

myApp.filter("myFilter", function () {
  return function (item) {
    return item.filter((i) => i.image);
  };
});

// Add data from ceilings.json & Filter by brand at CeilingLights.html
myApp.controller("ceilingListsController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("json/products.json").then(function (response) {
      $scope.products = response.data;
      $scope.ceilings = $scope.products.filter(
        (product) => product.type === "ceiling"
      );
      $scope.filteredCeilings = $scope.ceilings;
    });
    $scope.choose = function () {
      let markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      let cats = [];
      for (var checkbox of markedCheckbox) {
        cats.push(checkbox.value);
      }
      let data = $scope.ceilings;
      $scope.filteredCeilings =
        cats.length == 0
          ? data
          : data.filter(
              (ceiling) => cats.indexOf(ceiling.filtered.toString()) >= 0
            );
    };
  },
]);

// Add data from walls.json & Filter by brand at WallLights.html
myApp.controller("wallListsController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("json/products.json").then(function (response) {
      $scope.products = response.data;
      $scope.walls = $scope.products.filter(
        (product) => product.type === "wallLight"
      );
      $scope.filteredWalls = $scope.walls;
    });

    $scope.choose = function () {
      let markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      let cats = [];
      for (var checkbox of markedCheckbox) {
        cats.push(checkbox.value);
      }
      let data = $scope.walls;
      $scope.filteredWalls =
        cats.length == 0
          ? data
          : data.filter((wall) => cats.indexOf(wall.filtered.toString()) >= 0);
    };
  },
]);

// Add data from lamps.json & Filter by brand at Lamps.html
myApp.controller("lampListsController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("json/products.json").then(function (response) {
      $scope.products = response.data;
      $scope.lamps = $scope.products.filter(
        (product) => product.type === "lamp"
      );
      $scope.filteredLamps = $scope.lamps;
    });
    $scope.choose = function () {
      let markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      let cats = [];
      for (var checkbox of markedCheckbox) {
        cats.push(checkbox.value);
      }
      let data = $scope.lamps;
      $scope.filteredLamps =
        cats.length == 0
          ? data
          : data.filter((lamp) => cats.indexOf(lamp.filtered.toString()) >= 0);
    };
  },
]);

// Add data from fans.json & Filter by brand at Fans.html
myApp.controller("fanListsController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("json/products.json").then(function (response) {
      $scope.products = response.data;
      $scope.fans = $scope.products.filter((product) => product.type === "fan");
      $scope.filteredFans = $scope.fans;
    });
    $scope.choose = function () {
      let markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      let cats = [];
      for (var checkbox of markedCheckbox) {
        cats.push(checkbox.value);
      }
      let data = $scope.fans;
      $scope.filteredFans =
        cats.length == 0
          ? data
          : data.filter((fan) => cats.indexOf(fan.filtered.toString()) >= 0);
    };
  },
]);

// Add data from homeaccents.json & Filter by brand at HomeAccent.html
myApp.controller("homeaccentListsController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("json/products.json").then(function (response) {
      $scope.products = response.data;
      $scope.homeaccents = $scope.products.filter(
        (product) => product.type === "homeAccent"
      );
      $scope.filteredHomeaccents = $scope.homeaccents;
    });
    $scope.choose = function () {
      let markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      let cats = [];
      for (var checkbox of markedCheckbox) {
        cats.push(checkbox.value);
      }
      let data = $scope.homeaccents;
      $scope.filteredHomeaccents =
        cats.length == 0
          ? data
          : data.filter(
              (homeaccent) => cats.indexOf(homeaccent.filtered.toString()) >= 0
            );
    };
  },
]);

// Add data from outdoors.json & Filter by brand at OutdoorLights.html
myApp.controller("outdoorListsController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("json/products.json").then(function (response) {
      $scope.products = response.data;
      $scope.outdoors = $scope.products.filter(
        (product) => product.type === "outdoorLight"
      );
      $scope.filteredOutdoors = $scope.outdoors;
    });
    $scope.choose = function () {
      let markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      let cats = [];
      for (var checkbox of markedCheckbox) {
        cats.push(checkbox.value);
      }
      let data = $scope.outdoors;
      $scope.filteredOutdoors =
        cats.length == 0
          ? data
          : data.filter(
              (outdoor) => cats.indexOf(outdoor.filtered.toString()) >= 0
            );
    };
  },
]);

// Add data from spots.json &  Filter by brand at SpotLights.html
myApp.controller("spotListsController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("json/products.json").then(function (response) {
      $scope.products = response.data;
      $scope.spots = $scope.products.filter(
        (product) => product.type === "spotLight"
      );
      $scope.filteredSpots = $scope.spots;
    });
    $scope.choose = function () {
      let markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      let cats = [];
      for (var checkbox of markedCheckbox) {
        cats.push(checkbox.value);
      }
      let data = $scope.spots;
      $scope.filteredSpots =
        cats.length == 0
          ? data
          : data.filter((spot) => cats.indexOf(spot.filtered.toString()) >= 0);
    };
  },
]);

// Add data from smarts.json & Filter by brand at SmartLights.html
myApp.controller("smartListsController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("json/products.json").then(function (response) {
      $scope.products = response.data;
      $scope.smarts = $scope.products.filter(
        (product) => product.type === "smartLight"
      );
      $scope.filteredSmarts = $scope.smarts;
    });
    $scope.choose = function () {
      let markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      let cats = [];
      for (var checkbox of markedCheckbox) {
        cats.push(checkbox.value);
      }
      let data = $scope.smarts;
      $scope.filteredSmarts =
        cats.length == 0
          ? data
          : data.filter(
              (smart) => cats.indexOf(smart.filtered.toString()) >= 0
            );
    };
  },
]);

// Add data from decorations.json & Filter by brand at DecorationLights.html
myApp.controller("decorationListsController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $http.get("json/products.json").then(function (response) {
      $scope.products = response.data;
      $scope.decorations = $scope.products.filter(
        (product) => product.type === "decorationLight"
      );
      $scope.filteredDecorations = $scope.decorations;
    });
    $scope.choose = function () {
      let markedCheckbox = document.querySelectorAll(
        'input[type="checkbox"]:checked'
      );
      let cats = [];
      for (var checkbox of markedCheckbox) {
        cats.push(checkbox.value);
      }
      let data = $scope.decorations;
      $scope.filteredDecorations =
        cats.length == 0
          ? data
          : data.filter(
              (decoration) => cats.indexOf(decoration.filtered.toString()) >= 0
            );
    };
  },
]);

// count the number of customers who have visited this site
myApp.controller("visitorCount", [
  "$scope",
  "$location",
  function ($scope, $location) {
    $scope.count = 1;
    countVisiter();
    function countVisiter() {
      if (localStorage.getItem("visiter")) {
        $scope.count = parseInt(localStorage.getItem("visiter"));
        if ($location.path() === "#!/home") {
          $scope.count++;
        }
      }
      localStorage.setItem("visiter", $scope.count.toString());
    }
  },
]);
