// initial code 

"use strict" 
console.clear() ;

// main code 

// require all the modules , packages , objects 
let express = require("express") ;
const { getStarted, login, signup, build, forgetpass} = require("../controller/user.controller");


let route = express.Router() ;

route.get("/get-started" , getStarted) ;
route.get("/login" , login) ;
route.get("/signup" , signup) ;
route.get("/build",build) ;
route.get("/forgetpass" , forgetpass)




// export codes 

module.exports = route ;