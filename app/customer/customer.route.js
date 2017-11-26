(function() {
 
    angular.module('app.customer').config(function($urlRouterProvider, $stateProvider,){
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('customer',{
            url: '/',
            templateUrl:'app/customer/customer.html',
            controller:'CustomerCtrl'
          })
    })
})()