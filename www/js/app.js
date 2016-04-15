// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var  QR_Scanner = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
/*
.config(function($stateProvider, $urlProvider){
		$stateProvider
			.state('tabs', {
				url:'/tab',
				abstract: true,
				templaterUrl: 'templates/scanner.html'
				controller: 'QR_Scanner"'
			})
			
	
});*/
QR_Scanner.controller("QR_Scanner", function($scope, $cordovaBarcodeScanner) {
 
    $scope.scanBarcode = function() {
        $cordovaBarcodeScanner.scan().then(function(imageData) {
            //$scope.text = imageData.text;
			alert(imageData.text);
			//onsole.log($text);
            //console.log("Barcode Format -> " + imageData.format);
            //console.log("Cancelled -> " + imageData.cancelled);
        }, function(error) {
            console.log("An error happened -> " + error);
        });
    };
	$scope.encodeBarcode = function(){
		$cordovabarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, "http://www.nytimes.com").then( function(success) {
		   alert("encode success: " + success);
		}, function(fail) {
           alert("encoding failed: " + fail);
		});
	};
		
          
        
 
});

