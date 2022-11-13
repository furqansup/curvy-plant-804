let store_data=JSON.parse(localStorage.getItem("DreamUser"))
console.log(store_data);

document.getElementById("main_login_page_btn").addEventListener("click", signIn);


function signIn(){
    let email=document.getElementById("email").value;
    
    let pass=document.getElementById("password").value;

    for(let i=0;i<store_data.length;i++){
        if(email==store_data[i].useremail && pass==store_data[i].userpass){
            alert("login successfull")
            window.location.href="index.html"
        } else{
            
        }
    }



}
function register(){
    window.location.href="signup.html"
}







