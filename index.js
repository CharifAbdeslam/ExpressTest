var express = require("express");
var app = express();
app.set("port",process.env.PORT||300)
var server = app.listen(app.get("port"),()=>{
  console.log("Listening on PORT: "+ app.get("port"))
});
app.use("/",express.static('public_html'))
app.get("/home",(req,res)=>{
  res.send("Get")
});
