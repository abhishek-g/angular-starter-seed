/**
 * Created by abhishek on 8/29/2015.
 */

(function($,angular){

    "use strict";

    angular.module('TesterTasty',['ui.router', 'oc.lazyLoad'])
        .config(['$stateProvider', '$locationProvider', '$ocLazyLoadProvider', '$urlRouterProvider', '$httpProvider',
            function($stateProvider,$locationProvider,$ocLazyLoadProvider,$urlRouterProvider,$httpProvider){

                $urlRouterProvider.otherwise('/home');

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });

                //------------ Read the oc lazyload and angular ui router docs for more options

                $stateProvider.state('Home',{
                    url:'/home',
                    controller:['$scope',function($scope){

                    }],
                    template:'<div class="well well-lg">  Testing... You are Inside Home </div>'
                }).state('AboutUs',{
                    url:'/about-us',
                    controller:['$scope',function($scope){

                    }],
                    template:'<div class="well well-lg">  Testing... You are Inside About Us </div>'
                }).state('ContactUs',{
                    url:'/contact-us',
                    controller:['$scope',function($scope){

                    }],
                    template:'<div class="well well-lg">  Testing... You are Inside Contact Us </div>'
                })


        }]);

    // -------- Put here all run time routing checks if any.
        //.run(['',function(){
        //
        //
        //
        //
        //
        //}])
    //-------------------------------------------------------

    angular.bootstrap('document',['TesterTasty']);




})(window.$, window.angular);
