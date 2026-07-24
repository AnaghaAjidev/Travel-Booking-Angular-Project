var app = angular.module("travelApp", []);

app.controller("loginController", function ($scope) {

    $scope.user = {};

    $scope.login = function () {

        $scope.loginForm.$setSubmitted();

        if ($scope.loginForm.$invalid) {
            return;
        }

        // Create session
        sessionStorage.setItem("isLoggedIn", "true");
        sessionStorage.setItem("userEmail", $scope.user.email);

        window.location.href = "dashboard.html";
    };
    
});