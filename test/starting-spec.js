var assert = require('assert');


describe('Basic Mocha Test : ', () => {
    it('should throw error', function () {
        assert.equal(2, 3);
    });

    it('hide error using try-catch', function () {
        try {
            assert.equal(2, 3);
        } catch (e) {
            console.log(e);
        }
    });

    it('throw error', function () {
        throw ({
            message: "thrown error"
        });
    });
});