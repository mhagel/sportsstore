angular.module("sportsStore")
.controller("productListCtrl", function ($scope, $filter) {

       var selectedCategory = null;

        $scope.selectedCategory = function (newCategory) {
            selectedCategory = newCategory;
        }

        $scope.categoryFilterFn = function (product) {
            return selectedCategory == null || product.category == selectedCategory;
        }

    });