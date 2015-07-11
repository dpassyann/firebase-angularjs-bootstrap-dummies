'use strict';

app.config(
    function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'index',
                templateUrl: 'views/index/index.html'
            })

            .when('/create-user', {
                controller: 'indexCreateUser',
                templateUrl: 'views/index/createUser.html'
            })


            .when('/items/', {
                controller: 'itemList',
                templateUrl: 'views/item/list.html'
            })
            .when('/items/new', {
                controller: 'itemCreate',
                templateUrl: 'views/item/create.html'
            })

            .when('/items/edit', {
                controller: 'itemEdit',
                templateUrl: 'views/item/create.html'
            })

            .when('/categories/', {
                controller: 'categoryList',
                templateUrl: 'views/category/list.html'
            })
            .when('/categories/new', {
                controller: 'categoryCreate',
                templateUrl: 'views/category/create.html'
            })

            .when('/categories/edit', {
                controller: 'categoryEdit',
                templateUrl: 'views/category/create.html'
            })
    }
);