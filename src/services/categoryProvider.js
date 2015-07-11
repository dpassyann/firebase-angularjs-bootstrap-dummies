'use strict';

/*var categories = [
    {'id': 1, 'name': 'films'},
    {'id': 2, 'name': 'musiques'}
];*/

app.service('categoryProvider', function ($firebaseArray) {

    var ref = new Firebase("https://boiling-heat-1339.firebaseio.com/");
    var categorieRef = ref.child("categories");
    //categorieRef.set(categories);

    var categories = $firebaseArray(categorieRef);

    this.getCategories = function () {
        return categories;
    }

    this.create = function (category) {
        category['id'] = categories.length + 1;
        categories.$add(category);
    }

    this.remove = function( category ){
        categories.$remove( category );
    }

    this.update = function( category ){
        categories.$save( category );
    }
});