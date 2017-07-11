var assert = require('assert');
var authController = require("../../controllers/auth.controller");
var expect = require('chai').expect;
var should = require('chai').should();


describe('AuthController Test : ', () => {
    // Hooks
    beforeEach(function settingUpRoles() {
        console.log('running before each');
        authController.setRoles(['user']);
    });

    
    describe('isAuthorized: ', () => {
        it('Should return false if not authorized', function () {
            var isAuth = authController.isAuthorized(['user'], 'admin');
            //assert.equal(false, res);
            expect(isAuth).to.be.false;
            isAuth.should.be.false;
        });

        it('Should return true if authorized', function () {
            var res = authController.isAuthorized(['user', 'admin'], 'admin');
            assert.equal(true, res);
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