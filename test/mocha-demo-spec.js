var assert = require('assert');
var should = require('chai').should();

describe('Basic Mocha Test : ', () => {
    it('should deal with objects', function () {
        var obj = {
            name: 'Jon',
            gender: 'male'
        };
        var objB = {
            name: 'Jon',
            gender: 'male'
        };

        obj.should.have.property('name').equal('Jon');
        //obj.should.equal(objB); // should failing
        obj.should.deep.equal(objB);
    });

    it('should allow testing null', function () {
        var theNull = null;
        should.not.exist(theNull);
    });
});