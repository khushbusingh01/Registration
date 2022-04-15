document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    checkDate();  

})

var username=document.getElementById("username");
var last=document.getElementById("last");
var email =document.getElementById("email");
var pass1 =document.getElementById("pass1");
var pass2 =document.getElementById("pass2");

function checkDate(){
    var usernameValue=username.value.trim();
    var lastValue = last.value.trim();
    var emailValue =email.value.trim();
    var pass1Value =pass1.value.trim();
    var pass2Value =pass2.value.trim();
    if(usernameValue==""){
        setEroor(username,"username can't be blank");
    }else{
        setSuccess(username);

    }
    if(lastValue==""){
        setEroor(last,"last can't be blank");
    }else{
        setSuccess(last);

    }
    if(emailValue==""){
        setEroor(email,"Email can't be blank");
    }
    else if(!isEmail(emailValue)){
        setEroor(email,"Email is not valid");

    }
    else{
        setSuccess(email);

    }
    if(pass1Value==""){
        setEroor(pass1,"password can't be blank");
    }else{
        setSuccess(pass1);

    }
    if(pass2Value==""){
        setEroor(pass2,"password can't be blank");

    
      }  else if (pass1Value!==pass2Value){
      setEroor(pass2,"password does not match");
      }

    else{
        setSuccess(pass2);

    }

}
function setEroor(u,msg){
    var parentBox = u.parentElement;
    parentBox.className="input-field error";
   var span= parentBox.querySelector("span");
   var fa = parentBox.querySelector(".fa");
   span.innerText=msg;
   fa.className=" fa fa-exclamation-circle";
}
function setSuccess(u){
    var parentBox = u.parentElement;
    parentBox.className="input-field Success";
    var fa = parentBox.querySelector(".fa");
    fa.className=" fa fa-check-circle";

}
function isEmail(e){
    var reg=       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return reg.test(e)
    
        
}