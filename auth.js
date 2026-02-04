// User Authentication Module (LocalStorage Based)
let users = JSON.parse(localStorage.getItem("users")) || [];


function register(){
let u = document.getElementById("user").value;
let p = document.getElementById("pass").value;


if(u==="" || p===""){
alert("All fields required");
return;
}


let exists = users.find(x=>x.username===u);
if(exists){
alert("User already exists");
return;
}


users.push({username:u,password:p});
localStorage.setItem("users",JSON.stringify(users));
alert("Registration Successful");
}


function login(){
let u = document.getElementById("user").value;
let p = document.getElementById("pass").value;


let valid = users.find(x=>x.username===u && x.password===p);


if(valid){
localStorage.setItem("currentUser",u);
alert("Login Successful");
}else{
alert("Invalid Credentials");
}
}


function logout(){
localStorage.removeItem("currentUser");
alert("Logged Out");
}


function listUsers(){
console.log(users);
}