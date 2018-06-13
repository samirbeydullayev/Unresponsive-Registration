var btn = document.querySelector(".btn");
var firstname = document.querySelector(".firstname")
var lastname = document.querySelector(".lastname")
var mail = document.querySelector(".email");
var password = document.querySelector(".password");
var conPassword = document.querySelector(".conpassword");
var inputs = document.querySelectorAll("input");


var p = document.querySelectorAll("p")
var firstP = document.querySelector(".p1")
var lastP = document.querySelector(".p2")
var mailP = document.querySelector(".p3");
var passP = document.querySelector(".p4");
var conP = document.querySelector(".p5")



var span1 = document.querySelector(".name")
var span2 = document.querySelector(".surname")
var span3 = document.querySelector(".mail")
var span4 = document.querySelector(".passSpan")
var span5 = document.querySelector(".conPass")



// name vs surname

firstname.addEventListener("keyup",function(){
    firstP.innerHTML ="";
    firstname.style.border = "none";
    firstname.outline = ""
})

lastname.addEventListener("keyup",function(){
    lastP.innerHTML ="";
    lastname.style.border = "none";
    lastname.outline = ""
})

// end


// Mail

mail.addEventListener("keyup", function () {
    if (mail.value.indexOf("@") == -1) {
        mailP.innerHTML = "Zehmet olmasa e-mail formasini duzgun yazin!"
        mail.style.border = "1px solid red"
        mail.style.outline = "none"
    } else {
        mailP.innerHTML = ""
        mail.style.border = "none"
        mail.style.outline = ""

    }
    if (mail.value == "") {
        mailP.innerHTML = ""
        mail.style.border = "none"
        mail.style.outline = ""

    }
})

// end


// password vs confirmPssword

password.addEventListener("keyup",function(){
 if(password.value.length<8){
     passP.innerHTML = "Wifre 8-den boyuk olmalidir!!";
     password.style.border = "1px solid red";
     password.style.outline = "none";
     
 }else{
    passP.innerHTML = ""
    password.style.border = "none"
    password.style.outline = ""

 }

 if (password.value == "") {
    passP.innerHTML = ""
    password.style.border = "none"
    password.style.outline = ""

}

});

conPassword.addEventListener("keyup",function(){

    if(conPassword.value!=password.value){
        conP.innerHTML = "Parolla eyni deyildir";
        conPassword.style.border = "1px solid red";
        conPassword.style.outline = "none";
    }else{
        conP.innerHTML = ""
        conPassword.style.border = "none"
          conPassword.style.outline = ""
    }
})


// end

// button-evvent

btn.addEventListener("click",function(){
  
  if(firstname.value==""){
     firstP.innerHTML = "Adinizi mutleqdir"
     firstname.style.border = "1px solid red";
     firstname.style.outline = "none";     
  }
  if(lastname.value == ""){
    lastP.innerHTML = "Soyadiniz mutleqdir"
    lastname.style.border = "1px solid red";
    lastname.style.outline = "none"; 
  }
  if(mail.value ==""){
    mailP.innerHTML = "Emailinizi yazmaq mutleqdir"
    mail.style.border = "1px solid red";
    mail.style.outline = "none"
  }
  if(password.value == ""){
    passP.innerHTML = "Sifrenizi yazmaq mutleqdir"
    password.style.border = "1px solid red";
    password.style.outline = "none"
  }
  if(conPassword.value== ""){
    conP.innerHTML = "Sifre tesdiqi mutleqdir"
    conPassword.style.border = "1px solid red";
    conPassword.style.outline = "none"
  }
  
})
// button-event-end

// Label vs placeHolder

firstname.addEventListener("keyup",function(){
    span1.classList.add("up");
    if(firstname.value==""){
        span1.classList.remove("up")
    }

})

lastname.addEventListener("keyup",function(){
    span2.classList.add("up");
    if(lastname.value==""){
        span2.classList.remove("up")
    }

})

mail.addEventListener("keyup",function(){
    span3.classList.add("up2");
    if(mail.value==""){
        span3.classList.remove("up2")
    }

})


password.addEventListener("keyup",function(){
    span4.classList.add("up3");
    if(password.value==""){
        span4.classList.remove("up3")
    }

})

conPassword.addEventListener("keyup",function(){
    span5.classList.add("up3");
    if(conPassword.value==""){
        span5.classList.remove("up3")
    }

})


