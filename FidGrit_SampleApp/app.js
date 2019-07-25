var app = angular.module('BlankApp', ['ngMaterial', 'ngMessages', 'ngRoute']);

app.controller('AppCtrl', function ($mdDialog) {

    var self = this;

    this.heading = {
        name: 'FidGrit Touranment'
    };

    self.setColorQT = function () {
        self.qtclick = !self.qtclick;
    };

    self.setColorEW = function () {
        self.ewclick = !self.ewclick;
    };

    self.showAdvanced = function (ev) {
        $mdDialog.show({
            controllerAs: 'dialogCtrl',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            bindToController: true,
            controller: function ($mdDialog) {
                let vm = this;
                vm.hide = function hide() {
                    $mdDialog.hide();
                };
            },
            templateUrl: 'dialog.html'
        });
    };

});

app.config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'Views/home.html',
            controller: 'AppCtrl'
        })

        .otherwise({ redirectTo: '/' });
});


