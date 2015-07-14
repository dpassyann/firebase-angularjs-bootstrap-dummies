/**
 * Created by deungoueyann on 14/07/15.
 */

'use strict';

app.directive('checkUser', ["$rootScope", "$location", "$firebaseAuth", function ($rootScope, $location, $firebaseAuth){
    return {
        link: function(){
            var ref = new Firebase("https://boiling-heat-1339.firebaseio.com/");
            var auth = $firebaseAuth( ref );
            $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
                if( currRoute.access && !currRoute.access.isFree && !auth.$getAuth() ){
                    $location.url( prevRoute.$$route.originalPath );
                }
            })
        }
    }
} ]);
