let usuarios = ""
$(document).ready(function () {


        $.ajax({
            url: "https://doubledpetshop.herokuapp.com/get_users",
             success: function(users) {
                 usuarios = users
            }
        });
    });

function login(){

    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    let pass = false
    usuarios.forEach(function (user){
        if(user.email === email){
            //if(bcrypt.compare(password, user.password)) { No me deja importarlo y sin importarlo no me permite usarlo, esta instalado con npm install
                pass = true
            //}
        }
    });
    if(pass) alert("Credenciales Correctos");
    else alert("Credenciales Incorrectos")
}
/*

 */