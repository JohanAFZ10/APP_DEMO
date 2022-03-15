// Variable tipo global
var txtUser = document.getElementById("txtUser");
var txtPass = document.getElementById("txtPass");
var btnLogin = document.getElementById("btnLogin");
var users = [{ "name": "johan","pass": "1234"},
             { "name": "felipe","pass": "2468"},
             { "name": "carlos","pass": "0000"}]

btnLogin.onclick = function(){
    console.log("Datos Ingresados");
    let username = txtUser.value;
    let pass = txtPass.value;
    if(username == "johan" && pass == "1234"){
        console.log("Login Exitoso");
    }else{
        console.log("Error en sus datos");
    }
}
btnLogin.onmouseover = function(){
    for(let i=0;i<users.length;i++){
        console.log(users[i]);
    }
}