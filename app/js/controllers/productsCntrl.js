define(['app','imagesService'], function (app) {    app.controller('productsCntrl',        ['$scope', 'imagesLazyLoading',            '$timeout', '$rootScope',            function ($scope, imagesLazyLoading,                      $timeout, $rootScope) {                console.log('productsCntrl init');                /*                * PRODUCTS LIST FROM ROUTER RESOLVE SERVICE                * */                $scope.productsList = imagesLazyLoading.products;                /*                * MAPPING LIST FOR REQUIRED OBJECT PROPERTIES                * */                $scope.catalog = $scope.productsList.map(function (prod, i) {                    var product = {                        url: '',                        name: ''                    };                    product.url = prod.image_url;                    product.name = prod.name;                    return product;                });                $scope.displayBlock = false;                $timeout(function ()                {                    $scope.displayBlock = true;                    $rootScope.active = false;                }, 1500);            }]);});