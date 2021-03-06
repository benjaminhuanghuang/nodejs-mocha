var fs = require('co-fs');   //support generator
var userFile = './users.json';

module.exports = {
    users: {
        get: function *() {
            var data = yield fs.readFile(userFile, 'utf-8');
            return JSON.parse(data);
        },
        save: function *(user) {
            var users = yield this.get();
            users.push(user);
            yield fs.writeFile(userFile, JSON.stringify(users))
        }
    }
}