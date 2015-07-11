/**
 * Created by deungoueyann on 11/07/15.
 */

'use strict';

app.service('userProvider', function (user) {

    var ref = new Firebase("https://boiling-heat-1339.firebaseio.com/");

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

});
