const server_url = "http://localhost:8040/api/admin";

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

//admin login and register functionality
//register
let register_admin = async() => {
    let admin_data = await fetch(server_url);
    admin_data = await admin_data.json();
    console.log(admin_data);
    
    let input_admin_id = document.getElementById("admin_id").value;
    let input_admin_pass = document.getElementById("admin_passd").value;

    admin_data.forEach( async(el) => {
        if(el.admin_id === input_admin_id && el.admin_pass === input_admin_pass) {
            alert("User already registered");
        } else {
            let data = {
                "admin_id" : input_admin_id,
                "admin_pass" : input_admin_pass
           }
           await fetch(server_url, {
            method:"POST",
            body : JSON.stringify(data),
            headers : {
                "Content-Type" : "application/json"
            }
        });
        }
    });
    document.getElementById("admin_id").value = null;
    document.getElementById("admin_passd").value = null;
    
}

//login
let login_admin = async() => {
    let admin_data = await fetch(server_url);
    admin_data = await admin_data.json();
    console.log(admin_data);

    let input_admin_id = document.getElementById("admin_id").value;
    let input_admin_pass = document.getElementById("admin_passd").value;

    admin_data.forEach( async(el) => {
        if(el.admin_id === input_admin_id && el.admin_pass === input_admin_pass) {
            window.location.href = "./../admin/admin.html";
        } 
    });
    
    document.getElementById("admin_id").value = null;
    document.getElementById("admin_passd").value = null;
}






