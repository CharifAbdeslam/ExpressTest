var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser")
var fs = require("fs");
var userlist = require("./data/data.json");
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended : false}))
router.get("/api:user",(req,res)=>{
  res.json(userlist)
})
router.post("/api:user",(req,res)=>{
  userlist.unshift(req.body);
  fs.writeFile('./data/data.json',JSON.stringify(userlist),'utf-8')
  res.json(userlist);
})
module.exports = router;
