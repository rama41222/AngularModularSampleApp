(function(){
    'use strict'
    angular.module('app.customer').controller('CustomerCtrl', Customer)

    function Customer($scope, CustomerDataService, CustomerFactory){
        //Data 
        $scope.title = 'Mycustomer'
        $scope.customers = CustomerDataService.getAllCustomers()
        $scope.message = CustomerFactory.sayHello($scope.title)
    }
    
})()