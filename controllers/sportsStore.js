/**
 * Created by mark on 3/9/15.
 */
angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:5500/products")
    .controller("sportsStoreCtrl", function ($scope, $http, dataUrl) {

        $scope.data = {};

        $http.get(dataUrl)
            .success(function (data) {
                $scope.data.products = data;
            })
            .error(function (error) {
                $scope.data.error = error;
            });

    });

//the main role of the top-level controller is to define the data that will be used in the different views that the app will display