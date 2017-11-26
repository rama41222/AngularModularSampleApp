(function(){
    'use strict'
    angular.module('app.customer').factory('CustomerFactory', customerFactory)

    // Factory can return anything which can be a class(constructor function), instance of class, string, number or boolean.
    // If you return a constructor function, you can instantiate in your controller.
    
    function customerFactory(){
        return {
            sayHello: sayHello
        }
    }

    function sayHello(name){
        return 'Hello ' + name;
    }

})()