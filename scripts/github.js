angular.module('ngTokenAuthTestApp')
    .controller('IndexCtrl', function($scope, $auth) {

        $scope.handlePwdResetBtnClick = function() {
            $auth.requestPasswordReset($scope.pwdResetForm)
                .then(function(resp) {
                    console.log('Form submitted',resp);
                    // handle success response
                })
                .catch(function(resp) {
                    console.log('Form not submitted',resp);
                    // handle error response
                });
        };
    });