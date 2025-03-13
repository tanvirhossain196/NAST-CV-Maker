// initial code 
"use strict" 
console.clear() ;

// main code 

let app = require("./app");
let chalk = require("chalk") ;

let port = 3000 ;

app.listen(port , function(){
    console.log(chalk.bgRed.white.bold(`Server is running at http://localhost:${port}`)) ;
}) ;