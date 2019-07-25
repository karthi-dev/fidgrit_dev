(function (angular) {
    'use strict';
    angular.module('BlankApp').component('componentDetail', {
        templateUrl: 'componentDetail.html',
        bindings: {
            heading: '='
        }
    });
})(window.angular);

