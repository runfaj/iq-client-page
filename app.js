'use strict';




// step 1 in example
var sliderApp = angular.module('sliderApp',['ngAnimate']);

sliderApp.directive('slider', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {

      scope.currentIndex = 0; // Initially the index is at the first image

      scope.next = function() {
        scope.currentIndex < scope.images.length - 1 ? scope.currentIndex++ : scope.currentIndex = 0;
      };

      scope.prev = function() {
        scope.currentIndex > 0 ? scope.currentIndex-- : scope.currentIndex = scope.images.length - 1;
      };
// step 4b

      scope.$watch('currentIndex', function() {
        scope.images.forEach(function(image) {
          image.visible = false; // make every image invisible
        });

        scope.images[scope.currentIndex].visible = true; // make the current image visible
      });



    },
    templateUrl: 'directives/slider.html'
  };
});

// step 2 in example this is setting our images for the slide show

sliderApp.controller('SliderController', function($scope) {
  $scope.images = [{
    src: 'img1.jpg',
    title: 'Pic 1',
    visible: true
  }, {
    src: 'img2.jpg',
    title: 'Pic 2',
    visible: true
  }, {
    src: 'img3.jpg',
    title: 'Pic 3',
    visible: true
  }, {
    src: 'img4.jpg',
    title: 'Pic 4',
    visible: true
  }, {
    src: 'img5.jpg',
    title: 'Pic 5',
    visible: true
  }];
});

// step 4 pretty sure this is in the wrong place

