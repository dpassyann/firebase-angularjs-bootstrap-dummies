'use strict';

app
    .controller('itemIndex', function ($scope) {

    })

    .controller('itemList', function ($rootScope, $scope, itemProvider, $location) {
        $scope.items = itemProvider.getItems();

        $scope.delete = function( item ){
            itemProvider.remove( item )
        }

        $scope.edit = function( item ){
            $rootScope.itemToEdit = item;
            console.log( $rootScope.itemToEdit );
            $location.url( '/items/edit' )
        }
    })

    .controller('itemCreate', function ($scope, categoryProvider, itemProvider) {
        $scope.categories = categoryProvider.getCategories();

        $scope.save = function ( item ) {
            //$scope.items =
            itemProvider.create( item );
        }
    })

    .controller('itemRemove', function ($scope) {

    })

    .controller('itemEdit', function ($rootScope, $scope, categoryProvider, itemProvider, $location) {
        $scope.categories = categoryProvider.getCategories();

        $scope.item = $rootScope.itemToEdit;

        $scope.save = function ( item ) {
            itemProvider.update( item );
            $location.url('/items/');
        }
    })
;