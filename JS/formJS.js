// initial code 
"use strict"
console.clear() ;

// main code 
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let about = document.querySelector("#about");
let currentAddress = document.querySelector("#currentAddress");
let permanentAddressCheck = document.querySelector("#permanentAddressCheck");
let permanentAddress = document.querySelector("#permanentAddress");
let linkedLink = document.querySelector("#linkedLink");

// preview 
let name2 = document.querySelector("#name2");
let email2 = document.querySelector("#email2");
let mobile2 = document.querySelector("#mobile2");
let about2 = document.querySelector("#about2");
let currentAddress2 = document.querySelector("#currentAddress2");
let permanentAddress2 = document.querySelector("#permanentAddress2");
let linkedLink2 = document.querySelector("#linkedLink2");

name.addEventListener("input", function(){
    name2.textContent = name.value || "---" ;
})

email.addEventListener("input", function(){
    email2.textContent = email.value || "---" ;
})

mobile.addEventListener("input", function(){
    mobile2.textContent = mobile.value || "---" ;
})

about.addEventListener("input", function(){
    about2.textContent = about.value || "---" ;
})

linkedLink.addEventListener("input",function(){
    linkedLink2.textContent = linkedLink.value || "null"
})

currentAddress.addEventListener("input" , function(){
    permanentAddress2.textContent = currentAddress.value ;
})

permanentAddressCheck.addEventListener("click" , function(event){
    if(event.target.checked)
    {
        permanentAddress.value = currentAddress.value ;
        permanentAddress.readOnly = true;
    }
    else{
        permanentAddress.value =  "" ;
    }
})