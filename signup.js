
const passwordField = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");
eye.addEventListener("click", function () {
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
})


let arr=JSON.parse(localStorage.getItem("DreamUser")) || [];

function makeItwhite(){
    // console.log("im working")
    document.getElementById("user").style.backgroundColor="white"
 }
function makeItwhite2(){
    document.getElementById("email").style.backgroundColor="white" 
 }
function makeItwhite3(){
    document.getElementById("email1").style.backgroundColor="white" 
 }
function makeItwhite4(){
    document.getElementById("password").style.backgroundColor="white" 
 }
function makeItwhite5(){
    document.getElementById("password1").style.backgroundColor="white"
 
 }

document.querySelector("button").addEventListener("click",signup);


function signup(){
    let user=document.getElementById("user").value;
    let email=document.getElementById("email").value;
    let email1=document.getElementById("email1").value;
    let pass=document.getElementById("password").value;
    let pass1=document.getElementById("password1").value;
    let phone=document.getElementById("phone").value;
    let referral=document.getElementById("referral").value;
    let checks=document.getElementById("checkbox2").value
    // console.log(typeof checks)

    if (user.length<=0){
        document.getElementById("user").style.backgroundColor="red"
 
     }
     if (email.length<=0){
        document.getElementById("email").style.backgroundColor="red"
 
     }
     if (email1.length<=0){
        document.getElementById("email1").style.backgroundColor="red"
 
     }
     if (pass.length<=0){
        document.getElementById("password").style.backgroundColor="red"
 
     }
     
     if (pass1.length<=0){
        document.getElementById("password1").style.backgroundColor="red"
 
     }
    if(checks!="on"){
        alert("checkbox")

    }
   
     if(user==="" || email=="" || password==""){
        alert("please fill the required field")
     }


    // it will prevent from a blank submition

        if(user.length>0 && email.length>0 && email1.length>0 && pass.length>0 && pass1.length>0){
            

            if (email!=email1){
                alert("email must be same")
              
            } 
            if (pass!=pass1){
                alert("password must be same")
            }
            if(email==email1 && pass==pass1){
                let dermstore={
                    username:user,
                    useremail:email,
                    useremail1:email1,
                    userpass:pass,
                    userpass1:pass1,
                    userphone:phone,
                    userreferral:referral
                }
            
                // console.log(dermstore)
                arr.push(dermstore)
                localStorage.setItem("DreamUser",JSON.stringify(arr));
                document.getElementById("user").value=null;
                document.getElementById("email").value=null;
                document.getElementById("email1").value=null;
                document.getElementById("password").value=null;
                document.getElementById("password1").value=null;
                document.getElementById("phone").value=null;
                document.getElementById("referral").value=null;
                alert("Succesfully Sign up")
                window.location.href="./login.html"

            } 
        
        } else{
            alert("please fill the required field")
        }
       
}

