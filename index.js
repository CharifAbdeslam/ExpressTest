var express = require("express");
var app = express();
app.set("port",process.env.PORT||3000)
var server = app.listen(app.get("port"),()=>{
  console.log("Listening on PORT: "+ app.get("port"))
});
app.use("/",express.static('public_html'))
app.use(require('./Get'));
