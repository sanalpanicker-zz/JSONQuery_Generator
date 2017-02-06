(function () {

    var moduleName = "mainApp",
        controllerName = "main",
        //setting debug to true for dev purpose
        DEBUG = true;
    //launching the module with dependancies
    angular.module(moduleName, ['ngRoute', 'ui.bootstrap'])
        .config(['$routeProvider', function ($routeProvider) {
            //angualar router configuration http://localhost:8080/
            $routeProvider
                .when("/", {
                    //load this template
                    templateUrl: "templates/jGen.html",
                    //load this controller
                    controller: "jGenController"
                })
        }])
        //loading App libs
    require('./scripts/apps/jGen.js');
})();