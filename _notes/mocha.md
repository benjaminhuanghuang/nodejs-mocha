## Key points
    test runner
    Lifecycle
    Managing what tests execute

## Dependencies
    Mocha
    Chai :  for asserts
    chai-as-promised
    Sinon : for mocking
    istanbul : for code coverage


## Install mocha globally AND locally
    $ npm install -g mocha       # for command
    $ npm install --save-dev mocha   # for other dev tools

## Run 
    $ mocha        # run all spec

    $ mocha ./test/**/*.spec.js     # run specific spec
    
    # Using npm script
    "scripts": {
        "test": "mocha ./test/controllers/*.spec.js"
    },
    $ npm test


## Testing Async
    pass done to the test function
    For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.

## Testing Timeout
    Default timeout of function call in mocha is 2000 ms
    Solution of this issue is to modify the context of mocha
    this.timeout(3100);   // can't work with => function

## Hooks and scope
    beforeEach()  