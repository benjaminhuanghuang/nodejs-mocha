var koa = require('koa');
const router = require('koa-router')();

var data = require('./user-data.js');

var app = module.exports = new koa();

router.get('/user', function(ctx){
    console.log(data.users.get());
    ctx.body = data.users.get();
})

// app.use(ctx => {
//     ctx.body = 'Hello World';
// });

// add router middleware:
app.use(router.routes());
app.listen(3000);