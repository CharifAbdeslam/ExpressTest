var express = require("express");
var router = express.Router();
var userlist = require("./data/data.json");
router.get("/api:user",(req,res)=>{
  res.json(userlist)
})
module.exports = router;
