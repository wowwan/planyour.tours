angular.module('ngTokenAuthTestApp')
    .controller('IndexCtrl', function($scope, $auth) {
        $scope.handleBtnClick = function() {
            $auth.authenticate('github')
                .then(function(resp) {
                    // handle success
                })
                .catch(function(resp) {
                    // handle errors
                });
        };
    })