'use strict';

/*var items = [
    {'name': 'Django Unchained', 'category_id': 1},
    {'name': 'Forrest Gump', 'category_id': 1}
]*/

app.service('itemProvider', function ($firebaseArray) {

    var ref = new Firebase("https://boiling-heat-1339.firebaseio.com/");

    var itemsRef = ref.child("items");
    //itemsRef.set(items);

    var items = $firebaseArray(itemsRef)

    this.getItems = function () {
        return items;
    }

    this.create = function (item) {
        items.$add(item);
    }

    this.remove = function ( item ){
        items.$remove( item );
    }

    this.update = function ( item ){
        items.$save( item );
    }
});