/**
 *
 
 */
App.service('layout_pl', function ($rootScope, HomepageLayout) {

    var service = {};

    /**
     * Must return a valid template
     *
     * @returns {string}
     */
    service.getTemplate = function() {
        return "modules/layout/home/layout_pl/view.html";
    };

    /**
     * Must return a valid template
     *
     * @returns {string}
     */
    service.getModalTemplate = function() {
        return "templates/home/l10/modal.html";
    };

    /**
     * onResize is used for css/js callbacks when orientation change
     */
    service.onResize = function() {
        /** Do nothing for this particular one */
    };

    /**
     * Manipulate the features objects
     *
     * Examples:
     * - you can re-order features
     * - you can push/place the "more_button"
     *
     * @param features
     * @param more_button
     * @returns {*}
     */
    service.features = function(features, more_button) {
        /** Place more button at the end */
        /**features.overview.options.push(more_button);*/
        return features;
    };

    return service;

});

App.controller('PLController', ['$scope', function($scope)
{
  var patternLockJS = document.createElement('script');
  patternLockJS.type = "text/javascript";
  patternLockJS.src = "modules/layout/home/layout_pl/patternLock.js";
  patternLockJS.onload = function() {
    $scope.loadContent();
  };
  document.body.appendChild(patternLockJS);
}]);

