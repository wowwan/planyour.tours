angular.module('ngTokenAuthTestApp', ['ng-token-auth'])

    .config(function($authProvider) {

        // the following shows the default values. values passed to this method
        // will extend the defaults using angular.extend

        $authProvider.configure({
            apiUrl:                  'http://api-20-wowwan.c9users.io:8080',
            tokenValidationPath:     '/auth/validate_token',
            signOutUrl:              '/auth/sign_out',
            emailRegistrationPath:   '/auth',
            accountUpdatePath:       '/auth',
            accountDeletePath:       '/auth',
            confirmationSuccessUrl:  window.location.href,
            passwordResetPath:       '/auth/password',
            passwordUpdatePath:      '/auth/password',
            passwordResetSuccessUrl: window.location.href,
            emailSignInPath:         '/auth/sign_in',
            storage:                 'cookies',
            forceValidateToken:      false,
            validateOnPageLoad:      true,
            proxyIf:                 function() { return false; },
            proxyUrl:                '/proxy',
            omniauthWindowType:      'newWindow',
            authProviderPaths: {
                facebook: '/omniauth/facebook'
            },
            tokenFormat: {
                "access-token": "{{ token }}",
                "token-type":   "Bearer",
                "client":       "{{ clientId }}",
                "expiry":       "{{ expiry }}",
                "uid":          "{{ uid }}"
            },
            cookieOps: {
                path: "/",
                expires: 9999,
                expirationUnit: 'days',
                secure: false,
                domain: 'http://api-20-wowwan.c9users.io:8080/api/v1'
            },
            createPopup: function(url) {
                return window.open(url, '_blank', 'closebuttoncaption=Cancel');
            },
            parseExpiry: function(headers) {
                // convert from UTC ruby (seconds) to UTC js (milliseconds)
                return (parseInt(headers['expiry']) * 1000) || null;
            },
            handleLoginResponse: function(response) {
                return response.data;
            },
            handleAccountUpdateResponse: function(response) {
                return response.data;
            },
            handleTokenValidationResponse: function(response) {
                return response.data;
            }
        });
    });