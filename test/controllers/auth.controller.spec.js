var assert = require('assert');
var authController = require("../../controllers/auth.controller");

describe('AuthController Test : ', () => {
    // Hooks
    beforeEach(function settingUpRoles() {
        console.log('running before each');
        authController.setRoles(['user']);
    });

    // beforeEach("this function is erroring intentionally ", function settingUpRoles() {
    //     throw ({
    //         error: "error intentionally"
    //     })
    // });


    describe('isAuthorized: ', () => {
        it('Should return false if not authorized', function () {
            var isAuth = authController.isAuthorized(['user'], 'admin');
            assert.equal(false, isAuth);
        });

        it('Should return true if authorized', function () {
            var isAuth = authController.isAuthorized(['user', 'admin'], 'admin');
            assert.equal(true, isAuth);
        });

        // pending test
        it('Should not allow a git if not authorized');


        it('Should allow git if authorized', function () {

        });
    })

    describe('isAuthorizedAsync: ', () => {
        it('Should return false if not authorized', function (done) {
            this.timeout(3100); // can't work with => function
            authController.isAuthorizedAsync(['user'], 'admin', function (isAuth) {
                assert.equal(false, isAuth);
                done();
            });
        });
    })
});