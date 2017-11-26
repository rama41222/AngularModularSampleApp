(function(){
    'use strict'
    angular.module('app.customer').service('CustomerDataService',customerDataService)

    // Service does not need to return anything.
    // But you have to assign everything in this variable. 
    // Because service will create instance by default and use that as a base object.

    function customerDataService(){

        this.sayHello = sayHello
        this.getAllCustomers = getAllCustomers
        
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