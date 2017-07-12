var chai = require('chai');
var sinon = require('sinon');
var https = require('https');

var should = require('chai').should();

var gitService = require('../../services/gitService')();

describe('GitService : ', () => {
    describe('GetUser : ', () => {
        it('Should return user and repos', function () {
            gitService.getUser('benjaminhuang')
                .then(function (user) {

                });
        })
    })
});