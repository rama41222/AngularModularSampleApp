(function(){
    'use strict'
    angular.module('app.customer').service('CustomerDataService',customerDataService)

    function customerDataService(){
        return {
            sayHello: sayHello,
            getAllCustomers: getAllCustomers
        }
    }

    function sayHello(name){
        return 'Hello ' + name;
    }

    function getAllCustomers(){
        return [
            { name: 'Nimal', address: '23, Road, City', province: 'Province' },
            { name: 'Kamal', address: '23, Road, City', province: 'Province' },
            { name: 'Anil', address: '23, Road, City', province:' Province' }            
        ]
    }
})()