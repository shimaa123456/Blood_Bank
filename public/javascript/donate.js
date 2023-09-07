//valdiate form 
document.getElementById("submit").onclick=validate;

function validate(){
    validateId();
    validateName();
    validateGender();
    validateAge();
    validateWeight();
    validateDate();
    validatePhone();
    validatePassword();
    validateEmail();
    validateAddress();
   if (validateId()&&validateName()&&validateGender()&&validateAge()&&validateWeight()&& validateDate()&&validatePhone()&&
   validatePassword()&&validateEmail()&&validateAddress()){
    alert("We Make Appointment Successfully And Sent It To You");
   }
}

function validateId(){
    var id=document.getElementById("id").value;
    if(id.length==0){
        document.getElementById("errorId").innerHTML="Please choose your id";
        return false;
    }
        else if(parseInt(id)<1){
            document.getElementById("errorId").innerHTML="Your id must be more than 0 ";
            return false;
        }
        else{
            document.getElementById("errorId").innerHTML=""; 
            return true;
        }   

}
function validateName(){
var username=document.getElementById("uname").value;
if(username.length==0){
    document.getElementById("errorName").innerHTML="Please enter a user name";
    return false;
}
else if(username.length<3){
    document.getElementById("errorName").innerHTML="Please enter a valid user name with more than 2 character";
    return false;
}
else if(/[0-9]/.test(username)){
    document.getElementById("errorName").innerHTML="username should not contain numbers";
    return false;
}
else{
    document.getElementById("errorName").innerHTML=""; 
    return true;

}
}
function validateGender(){
    var genderM=document.getElementById("male");
    var genderF=document.getElementById("female");

    if(genderM.checked==false && genderF.checked==false )
       {
        document.getElementById("errorgender").innerHTML = 'you must select male or female';
            return false;
       } 
    else{
        document.getElementById("errorgender").innerHTML = '';
        return true;  
    }
}
function validateAge(){
    var age=document.getElementById("age").value;
    if(age.length==0){
        document.getElementById("errorage").innerHTML="Please enter your age";
        return false;
    }
        else if(parseInt(age)<16){
            document.getElementById("errorage").innerHTML="Your age is small for registration";
            return false;
        }
        else if(parseInt(age)>60){
            document.getElementById("errorage").innerHTML="Your age is old for registration";
            return false;
        }
        else{
            document.getElementById("errorage").innerHTML=""; 
            return true;
        }
}
function validateWeight(){
    var weight=document.getElementById("weight").value;
    if(weight.length==0){
        document.getElementById("errorweight").innerHTML="Please enter your weight";
        return false;
    }
        else if(parseInt(weight)<30){
            document.getElementById("errorweight").innerHTML="Your weight is small ,sorry you cant donate";
            return false;
        }
        else if(parseInt(weight)>180){
            document.getElementById("errorweight").innerHTML="Your weight is big , sorry you cant't donate";
            return false;
        }
        else{
            document.getElementById("errorweight").innerHTML=""; 
            return true;
        }
}
function validateDate(){
    let date = document.getElementById("date");
    if (date.value == "") {
        document.getElementById("errordate").innerHTML = 'Enter last donation date';
        return false;
    } else {
        document.getElementById("errordate").innerHTML = '';
        return true;
    }
}
function validatePhone(){
    var phone=document.getElementById("phone").value;
    if(phone.length==0){
        document.getElementById("errorphone").innerHTML="Please enter your phone";
        return false;
    }
    else if(phone.length==11){
        document.getElementById("errorphone").innerHTML=""; 
        return true;
    }
    else{
        document.getElementById("errorphone").innerHTML="Please enter a valid phone number";
        return false;
        }
}
function validatePassword(){
    var password=document.getElementById("pass");
    if(password.value==""){
        document.getElementById("errorpass").innerHTML="Please enter a password";
        return false;
    }
    else if (password.value.length >= 8 && /[0-9]/.test(password.value) && /[!@#$%^&*]/.test(password.value)){
        document.getElementById("errorpass").innerHTML="";
        return true;
    }
    else{
        document.getElementById("errorpass").innerHTML="Please enter a password with 8 characters or more, containing numbers and special characters"; 
        return false;
    }
}
function validateEmail(){
        var email=document.getElementById("email");
        if(email.value==""){
            document.getElementById("erroremail").innerHTML="Please enter an email";
            return false;
        }
        else{
            var email2 = document.getElementById("email").value;
            var atpos = email2.indexOf("@");
            var dotpos = email2.lastIndexOf(".");
        
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email2.length) {
                document.getElementById("erroremail").innerHTML = 'not a valid format email';
                return false;
            } else {
                document.getElementById("erroremail").innerHTML="";
                return true;
            } 
    
        }
}    
function validateAddress(){
        let address = document.getElementById("address");
        if (address.value == "") {
            document.getElementById("erroraddress").innerHTML = 'Enter your address';
            return false;
        } else {
            document.getElementById("erroraddress").innerHTML = '';
            return true;
        }   
}



// reset values
document.getElementById("reset").onclick=Reset;
function Reset(){
    document.getElementById("id").value=""; 
    document.getElementById("uname").value="";
    document.getElementById("female").checked=false;
    document.getElementById("male").checked=false;
    document.getElementById("age").value="";
    document.getElementById("weight").value="";
    document.getElementById("date").value="";
    document.getElementById("phone").value="";
    document.getElementById("pass").value="";
    document.getElementById("email").value="";
    document.getElementById("address").value="";
}