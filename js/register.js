var app = angular.module("travelApp", []);

app.controller("registerController", function ($scope) {

    $scope.user = {};

    $scope.register = function () {

        $scope.registerForm.$setSubmitted();

        if ($scope.registerForm.$invalid) {
            return;
        }

        if ($scope.user.password !== $scope.user.confirmPassword) {
            return;
        }

        alert("Registration Successful!");

        window.location.href = "index.html";
    };
    
});