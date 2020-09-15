const Koa = require("koa")
const app = new Koa();

app.use(async ctx => {
    ctx.body = "hello koa";
});

app.listen("3000",function(err){
    if(err){
        console.log(err)
    }
    console.log("Sever is running...")
})
