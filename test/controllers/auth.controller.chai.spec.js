var assert = require('assert');
var authController = require("../../controllers/auth.controller");
var expect = require('chai').expect;
var should = require('chai').should();
var sinon = require('sinon');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
chai.should();

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

    describe('isAuthorizedPromise: ', () => {
        it('Should return false if not authorized', function () {
            authController.isAuthorizedPromise('admin').should.eventually.be.false;
        });
    })

    describe('getIndex: ', () => {
        it('Should render index', function () {
            //stubbing function
            var isAuth = sinon.stub(user, 'isAuthorized').return(true);
            var req = {user: user};
            var res = {
                render: sinon.spy()
            };
            authController.getIndex(req, res);
            isAuth.calledOnce.should.be.true;           //test the function
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('index');
        });
    })
});