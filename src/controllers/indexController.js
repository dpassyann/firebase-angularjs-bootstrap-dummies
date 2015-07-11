/**
 * Created by deungoueyann on 11/07/15.
 */
'use strict';

app
    .controller('index', function ( $scope ) {

    })

    .controller('indexCreateUser', function ( $scope, userProvider, $location ) {
        $scope.create = function( user ){
            userProvider.create( user );
            $location.url( '/' );
        }
    })
;
