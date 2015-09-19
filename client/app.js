angular.module('Timesheeting', ['ngRoute', 'ngMessages', 'satellizer'])
  .config(function($routeProvider, $authProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/photo/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise('/');


        // SATELLIZER
        $authProvider.httpInterceptor = true;
        $authProvider.withCredentials = true;
        $authProvider.tokenRoot = null;
        $authProvider.cordova = false;
        $authProvider.baseUrl = '/';
        $authProvider.loginUrl = '/auth/login';
        $authProvider.signupUrl = '/auth/signup';
        $authProvider.unlinkUrl = '/auth/unlink/';
        $authProvider.tokenName = 'token';
        $authProvider.tokenPrefix = 'satellizer';
        $authProvider.authHeader = 'Authorization';
        $authProvider.authToken = 'Bearer';
        $authProvider.storageType = 'localStorage';

  });