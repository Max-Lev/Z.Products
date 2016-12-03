define(['app', 'angular', 'productsCntrl', 'globalVariables'],    function (app, angular, productsCntrl, globalVariables) {        app.controller('rootCntrl',            ['$scope',                '$rootScope',                'imagesService',                '$state',                'globalVariables',                function ($scope,                          $rootScope,                          imagesService,                          $state,                          globalVariables) {                    console.log('rootCntrl init');                    /*                     * ROUTING TO PRODUCTS VIEW ON MAIN PAGE CLICK EVENT                     * */                    $scope.productsNav = function () {                        $state.go('products');                    };                    /*                     * UPDATING VIEW STATE CLASS FOR DIFFERENT VIEW LAYOUT                     * */                    $scope.appState = 'start';                    $rootScope.$on('$stateChangeSuccess',                        function (evt, toState, toParams, fromState, fromParams) {                            $scope.appState = toState.name;                        });                    /*                     * AJAX LOADER                     * */                    $scope.zeekitLoader = globalVariables.zeekitLoader;                    $rootScope.active = false;                }]);        /*         * UI ROUTER CONFIG         * */        app.config(['$stateProvider',            '$urlRouterProvider', '$urlMatcherFactoryProvider',            function ($stateProvider,                      $urlRouterProvider, $urlMatcherFactoryProvider) {                $stateProvider.state('start',                    {                        url: '/start',                        views: {                            'mainView': {                                templateUrl: 'app/templates/views/start.view.html',                                controller: 'rootCntrl'                            }                        }                    })                    .state('products', {                        url: '/products',                        views: {                            'mainView': {                                templateUrl: 'app/templates/views/products.view.html',                                controller: 'productsCntrl',                            }                        },                        /*                         LOAD IMAGES SERVICE AS SOON A NAVIGATION STARTS                         * */                        resolve: {                            imagesLazyLoading: function ($q, imagesService, $rootScope) {                                var defere = $q.defer();                                $rootScope.active = true;                                imagesService.getImages().then(function (success) {                                    defere.resolve({                                        products: success.products                                    })                                }, function (error) {                                    console.log(error);                                });                                return defere.promise;                            }                        }                    })                    .state('product', {                        url: '/product/:id',                        views: {                            'mainView': {                                templateUrl: 'app/templates/views/product.view.html',                                controller: 'productCntrl'                            }                        }                    })                    .state('product.item', {                        url: '/item/:itemID',                        views: {                            'itemView': {                                templateUrl: 'app/templates/views/item.view.html',                                controller: 'itemCntrl'                            }                        }                    });                $urlRouterProvider.otherwise('/products');                //console.log($urlMatcherFactoryProvider);            }])    });