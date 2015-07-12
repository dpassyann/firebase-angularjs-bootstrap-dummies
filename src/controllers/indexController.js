/**
 * Created by deungoueyann on 11/07/15.
 */
'use strict';

app
    .controller('index', function ( $scope, userProvider, $location) {
        $scope.session = userProvider.getAuth();

        $scope.connect = function( user ){
            userProvider.connect( user );
            //$location.url( '/' );
            $scope.session = userProvider.getAuth();
        }
    })

    .controller('indexCreateUser', function ( $scope, userProvider, $location ) {
        $scope.create = function( user ){
            userProvider.create( user );
            $location.url( '/' );
        }
    })
;
