// Configuration Optionsrequire.config({    paths: {        'angular': '../vendor/angular.min',        'uiRouter': '../vendor/angular-ui-router.min',        'app': 'app',        'rootCntrl': 'controllers/rootCntrl',        'productsCntrl': 'controllers/productsCntrl',        'controllers': 'controllers/controllers',        'imagesService': 'services/imagesService',        'globalVariables': 'global.variables/global.variables',        'productCntrl': 'controllers/productCntrl',        'itemCntrl': 'controllers/itemCntrl',    },    // shim: makes external libraries reachable    shim: {        angular: {            exports: 'angular'        },        uiRouter: {            deps: ['angular']        },    }});// Angular Bootstrapdefine(['app', 'angular', 'rootCntrl', 'uiRouter'],    function (app, angular) {        angular.bootstrap(document, ['zeekit']);        console.log('main init');    });