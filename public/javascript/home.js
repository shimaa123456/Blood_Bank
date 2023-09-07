
// make appointment

document.getElementById('submit').addEventListener('click', validate);

function validate(){
    validateName();
    validateEmail();
    validatePhone();
    console.log(validateName()&&validateEmail()&&validatePhone());
    if(validateName()&&validateEmail()&&validatePhone()){
        document.getElementById("form-data-unsuc").style.display = "none";
        document.getElementById("form-data-suc").style.display = "initial";
    }
    else{
        document.getElementById("form-data-suc").style.display = "none";
        document.getElementById("form-data-unsuc").style.display = "initial";
    }
}

function validateName(){
    var username=document.getElementById("name").value;
    if(username.length==0){
        document.getElementById("name_error").style.display = "initial";
        return false;
    }
    else if(username.length<3){
        document.getElementById("name_error").innerText = "Enter a valid user name ";
        document.getElementById("name_error").style.display = "initial";
        return false;
    }
    else if(/[0-9]/.test(username)){
        document.getElementById("name_error").innerText = "username should not contain numbers";
        document.getElementById("name_error").style.display = "initial";
        return false;
    }
    else{
        document.getElementById("name_error").style.display = "none";
        return true;
    
    }
}

function validatePhone(){
    var phone=document.getElementById("phone").value;
    if(phone.length==0){
        document.getElementById("phone_error").style.display = "initial";
        return false;
    }
    else if(phone.length==11){
        document.getElementById("phone_error").style.display = "none";
        return true;
    }
    else{
        document.getElementById("phone_error").innerText = "Enter a valid phone ";
        document.getElementById("phone_error").style.display = "initial";
        return false;
        }
}

function validateEmail(){
    var email=document.getElementById("email");
    if(email.value==""){
        document.getElementById("email_error1").style.display = "none";
        document.getElementById("email_error").style.display = "initial";
        return false;
    }
    else{
        var email2 = document.getElementById("email").value;
        var atpos = email2.indexOf("@");
        var dotpos = email2.lastIndexOf(".");
    
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email2.length) {
            document.getElementById("email_error").style.display = "none";
            document.getElementById("email_error1").style.display = "initial";
            return false;
        } else {
            document.getElementById("email_error").style.display = "none";
            document.getElementById("email_error1").style.display = "none";
            return true;
        } 

    }
}


// animation progress counter

let nums = document.querySelectorAll(".counter-block-1 .counter");
let section = document.querySelector(".counter-row");
let started = false;


window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 400){
        if(!started){
        nums.forEach((num) => startCount(num));
    }
    started = true;
}
}

function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    },1 / goal);
}

// startCount(document.querySelectorAll(".counter")[0]);
