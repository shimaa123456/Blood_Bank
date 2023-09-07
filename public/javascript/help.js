// patient list 

document.getElementById('submit').addEventListener('click', addPatient);

let patients=[];
function addPatient() {
    if (user_name.value.trim() == "") {
        user_name.setAttribute("placeholder", "Enter Your Name");

    }else if (user_name.value.trim().length<3) {
        user_name.value="";
        user_name.setAttribute("placeholder", "Enter a valid user name");

    }else if (user_email.value.trim() == "") {
        user_email.setAttribute("placeholder", "Enter Your Email");

    }else if (user_email.value.length > 1) {
        var email2 = user_email.value;
            var atpos = email2.indexOf("@");
            var dotpos = email2.lastIndexOf(".");
            if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email2.length) {
                user_email.value="";
                user_email.setAttribute("placeholder", "Not a valid email");
            }
    }
    if (phone.value.trim() == "") {
        phone.setAttribute("placeholder", "Enter Your Phone");

    }else if (phone.value.length!=11) {
        phone.value="";
        phone.setAttribute("placeholder", "Enter a valid Phone");

    }
    else if (age.value.trim() == "") {
        age.setAttribute("placeholder", "Enter Your Age");

    }
    else if (message.value.trim() == "") {
        message.setAttribute("placeholder", "Enter Your Message");

    }
    else {
       
        let patient = [];
        patient.push(user_name.value);
        patient.push(user_email.value);
        patient.push(phone.value);
        patient.push(age.value);
        patient.push(message.value);
        let x="";
        if(blood_type.value == 1 )
         x= "Blood Type Is A+";
        else if(blood_type.value == 2 )
        x= "Blood Type Is A-";
        else if(blood_type.value == 3 )
        x= "Blood Type Is B+";
        else if(blood_type.value == 4 )
        x= "Blood Type Is B-";
        else if(blood_type.value == 5 )
        x= "Blood Type Is AB+";
        else if(blood_type.value == 6 )
        x= "Blood Type Is AB-";
        else if(blood_type.value == 7 )
        x= "Blood Type Is O+";
        else
        x= "Blood Type Is O-";
        patient.push(x);


        // console.log(patient)
        patients.push(patient);
        res.innerHTML = "";
        for (let i = 0; i < patients.length; i++) {
            res.innerHTML += `
        <div class="patient">
            <h1>${patients[i][0]} </h1>
            <span>Email :${patients[i][1]} <span>
            <span>Phone :${patients[i][2]} <span>
            <span>Age :${patients[i][3]} <span>
            <span>Message :${patients[i][4]} <span>
            <h3>${patients[i][5]}</h3>
       
        </div>
        `
        }
        alert("Send Your Request Successfully");
       
        user_name.value = user_email.value = phone.value = age.value = message.value = x = "";
        user_name.setAttribute("placeholder", "Name");
        user_email.setAttribute("placeholder", "Email");
        phone.setAttribute("placeholder", "Phone");
        age.setAttribute("placeholder", "Age");
        message.setAttribute("placeholder", "Message");
    }

            
}