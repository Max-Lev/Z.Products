define(['app', 'imagesService', 'productCntrl'], function (app) {    app.controller('productsCntrl',        ['$scope', 'imagesLazyLoading',            '$timeout', '$rootScope',            '$state', '$stateParams',            '$filter',            function ($scope, imagesLazyLoading,                      $timeout, $rootScope,                      $state, $stateParams, $filter) {                console.log('productsCntrl init');                /*                 * PRODUCTS LIST FROM ROUTER RESOLVE SERVICE                 * */                $scope.productsList = imagesLazyLoading.products;                setProducts($scope.productsList);                /*                 * MAPPING LIST FOR REQUIRED OBJECT PROPERTIES                 * */                function setProducts(productsList) {                    $scope.catalog = productsList.map(function (prod, i) {                        var product;                        product =                        {                            id: prod.id,                            name: prod.name,                            url: prod.image_url,                            brand: prod.user_name,                            productsList: prod.products                        };                        return product;                    });                };                displayLimit($scope.catalog);                function displayLimit(list) {                    $scope.list = [];                    for (var i = 0; i <= 9; i++) {                        $scope.list.push(list[i]);                    }                    $scope.catalog = $scope.list;                };                $scope.productDescription = function (product) {                    $state.data = {product: product};                    $state.go('product', {id: product.id});                };                $scope.displayBlock = false;                $timeout(function () {                    $scope.displayBlock = true;                    $rootScope.active = false;                }, 0);                $scope.sortProducts = function (SearchItems) {                    var list = [];                    $scope.productsList = [];                    SearchItems = 454;                    list = $scope.productsList.find(function (v, i) {                        if (v.id == SearchItems) {                            $scope.productsList.push(list[i]);                            return list[i] = v;                        }                    });                    setProducts($scope.productsList);                };            }]);});