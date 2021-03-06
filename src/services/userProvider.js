/**
 * Created by deungoueyann on 11/07/15.
 */

'use strict';

app.service('userProvider', function() {

    var ref = new Firebase("https://boiling-heat-1339.firebaseio.com/");

    this.create = function( user ){

        ref.createUser({
            email    : user.email,
            password : user.password
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });

    }

});
