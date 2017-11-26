(function(){
    'use strict'
    angular.module('app.customer').controller('CustomerCtrl',Customer)

    function Customer($scope, CustomerDataService){
        //Data 
        $scope.title = 'Mycustomer'
        $scope.customers = CustomerDataService.getAllCustomers()
    }
    
})()