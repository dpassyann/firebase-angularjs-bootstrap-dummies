'use strict';

app
    .controller('categoryIndex', function ($scope) {
    })

    .controller('categoryList', function ($rootScope, $scope, categoryProvider, $location) {
        $scope.categories = categoryProvider.getCategories();

        $scope.delete = function ( category ){
            categoryProvider.remove( category );
        }

        $scope.edit = function ( categorie ){
            $rootScope.categorieToEdit = categorie;
            $location.url( '/categories/edit' )
        }
    })

    .controller('categoryCreate', function ($scope, categoryProvider) {
        $scope.save = function (category) {
            categoryProvider.create(category);
        }
    })

    .controller('categoryRemove', function ($scope, categoryProvider) {
    })

    .controller('categoryEdit', function( $rootScope, $scope, categoryProvider, $location ){
        $scope.category = $rootScope.categorieToEdit;
        $scope.save = function( category ){
            categoryProvider.update( category );
            $location.url( '/categories/' );
        }
    })
;