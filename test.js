var koa = require('koa');
var route = require('koa-route');
var app = new koa();
app.use(route.get('/', index));
app.use(route.get('/about', about));
function *index() {
 this.body = "<h1>Hello! This is my home page!</h1>";
}
function *about() {
 this.body = "<h2>My name is Adam and I like JavaScript</h2>";
}
app.listen(8008);
console.log('Koa listening on port 8008');