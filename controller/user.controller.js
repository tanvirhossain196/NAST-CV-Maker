// initial code 

"use strict" 
console.clear() ;

// main code 

// require all the modules , packages , objects 

let path = require("path");

let getStarted = function(req,res){
    res.status(200).sendFile(path.join(__dirname, "..", "pages", "getStartedPage.html"));
}

let login = function(req,res){
    res.status(200).sendFile(path.join(__dirname, "..", "pages", "loginPage.html"));
}

let signup = function(req,res){
    res.status(200).sendFile(path.join(__dirname, "..", "pages", "register.html"));
}

let build = function(req,res){
    res.status(200).sendFile(path.join(__dirname, "..", "pages", "form.html"));
}

let forgetpass = function(req,res){
    res.status(200).sendFile(path.join(__dirname,"..","pages","forgetPass.html")) ;
}

// export codes 

module.exports = {

    getStarted ,
    login ,
    signup,
    build ,
    forgetpass ,
}


