
// validate login form


function validate(){
    validateName();
    validatePassword();
    if (validateName()&&validatePassword()){
     alert("Logined Successfully , Welcome "+user_name.value);
    }
    console.log(validateName());
    return(validateName()&&validatePassword());
}

// validate name

function validateName(){
    if (user_name.value.trim() == "") {
        document.getElementById("error_name").style.display = "initial";
      return false;
    }
    else if(user_name.value.trim().length<3){
        document.getElementById("error_name").innerText = "Enter a valid username ";
        document.getElementById("error_name").style.display = "initial";
        return false;
    }
    else if(/[0-9]/.test(user_name.value)){
        document.getElementById("error_name").innerText = "Username should not contain numbers ";
        document.getElementById("error_name").style.display = "initial";
        return false;
    }
    else{
        document.getElementById("error_name").style.display = "none";
        return true;
    
    }
}

function validatePassword(){
    var password=document.getElementById("password");
    if(password.value==""){
        document.getElementById("error_pass").style.display = "initial";
        return false;
    }
    else if (password.value.length >= 8 && /[0-9]/.test(password.value) && /[!@#$%^&*]/.test(password.value)){
        document.getElementById("error_pass").style.display = "none";
        return true;
    }
    else{
        document.getElementById("error_pass").innerText = "Enter a valid password ";
        document.getElementById("error_pass").style.display = "initial";
        return false;
    }
}