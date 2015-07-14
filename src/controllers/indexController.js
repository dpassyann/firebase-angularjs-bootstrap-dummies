/**
 * Created by deungoueyann on 11/07/15.
 */
'use strict';

app
    .controller("index", ["$scope", "$firebaseAuth", "$location", "userProvider",
        function($scope, $firebaseAuth, $location) {
            var ref = new Firebase("https://boiling-heat-1339.firebaseio.com/");
            var auth = $firebaseAuth( ref );
            $scope.session = auth.$getAuth();

            $scope.connect = function( user ){
                console.log( $scope.session );
                auth.$authWithPassword({
                    email: user.email,
                    password: user.password
                }).then(function(authData) {
                    console.log("2 => Logged in as:", authData);
                    $scope.session = auth.$getAuth();
                    console.log("3 => Session:", $scope.session);
                    $location.url( '/' );

                }).catch(function(error) {
                    console.error("Authentication failed:", error);
                });

            }

            $scope.disconnect = function(){
                $scope.session = null;
                auth.$unauth();
                console.log( 'deconnection' );
            }
        }
    ])

    .controller('indexCreateUser', function ( $scope, userProvider, $location ) {
        $scope.create = function( user ){
            userProvider.create( user );
            $location.url( '/' );
        }
    })
;

