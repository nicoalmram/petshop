function login_validation(){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    document.getElementById("pUsername").innerHTML = " ";
    document.getElementById("pPassword").innerHTML = " ";
    document.getElementById("result").innerHTML = " ";

    if((username.length < 4 || username.length > 20) && (password.length < 8 || password.length > 20)){
        document.getElementById("pUsername").innerHTML = "Tamaño del nombre de usuario invalido, debe de tener entre 4 y 20 letras";
        document.getElementById("pPassword").innerHTML = "Tamaño de la contraseña invalido, debe de tener entre 4 y 20 letras";
        return false;
    } else if(username.length < 4 || username.length > 20) {
        document.getElementById("pUsername").innerHTML = "Tamaño del nombre de usuario invalido, debe de tener entre 4 y 20 letras";
        return false;
    } else if(password.length < 8 || password.length > 20){
        document.getElementById("pPassword").innerHTML = "Tamaño de la contraseña invalido, debe de tener entre 4 y 20 letras";
        return false;
    }

    if(!/^[A-Za-z0-9]{4,20}$/.test(username)){
        alert("Invalid username 4-20 alphanumeric characters");
        return false;
    }
    if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,20}$/.test(password)){
        alert("Invalid password format at least one uppercase, one number and one symbol");
        return false;
    }

    document.getElementById("result").innerHTML = "Congratz!!!";
    alert("Congratz!")
    return true;
}


function createAccount(){


    let email = document.getElementById("rEmail").value;
    let password = document.getElementById("rPassword").value;
    let cpassword = document.getElementById("rcPassword").value;


    if(email.length > 9 && email.length < 322){
        if(password === cpassword){
            alert("cuenta creada");
            return true;
        }
    }
    alert("la cuenta no pudo ser creada");
    return false
}

function recoveryPassword(){
    let email = document.getElementById("recoveryEmail").value;

    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
        alert("invalid email format");
        return false;
    }
    alert("le llegara un correo con los pasos a seguir");
    return true;
}