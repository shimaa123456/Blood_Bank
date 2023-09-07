// search donors

document.getElementById('submit').addEventListener('click', addDonor);

// save value
var selected_blood_groub;
var selected_country;
for (let i = 0; i < 8; i++) {
    if(blood_type.value == 1 )
    selected_blood_groub= "A+";
   else if(blood_type.value == 2 )
   selected_blood_groub= "A-";
   else if(blood_type.value == 3 )
   selected_blood_groub= "B+";
   else if(blood_type.value == 4 )
   selected_blood_groub= "B-";
   else if(blood_type.value == 5 )
   selected_blood_groub= "AB+";
   else if(blood_type.value == 6 )
   selected_blood_groub= "AB-";
   else if(blood_type.value == 7 )
   selected_blood_groub= "O+";
   else
   selected_blood_groub= "O-";
}
for (let i = 0; i < 5; i++) {
    if(country_select.value == 1 )
    selected_country= "Giza";
   else if(country_select.value == 2 )
   selected_country= "Aswan";
   else if(country_select.value == 3 )
   selected_country= "Cairo";
   else if(country_select.value == 4 )
   selected_country= "Alex";
   else
   selected_country= "Menoufia";
}


// array of donors
let ids = [1,2,3,4,5,6,7,8];
let names = [" Ali", "Mohamed", "Sara", "Mostafa", "Aya", "Shimaa", "Emad", "Essra"];
let bloods = ["A+", "B+" ,"O-" ,"AB+", "A+", "A-" ,"AB-" ,"B+"];
let genders = ["Male" ,"Male" ,"Female" ,"Male" ,"Female" ,"Female" ,"Male" ,"Female"];
let ages = [22,29,30,42,24,20,33,18];
let weights = [70,80,79,82,72,69,76,50];
let dates = ["2018-12-12" , "2019-12-19" , "2017-3-11" , "2020-12-12" , "2018-2-10" , "2021-10-2" , "2023-2-12" , "2023-2-1"];
let phones = ["01521434639" , "01599223343" , "01002311232" , "01200223314" , "01500122345" , "01202744012" , "0102344940" , "01012002344"];
let addresses = ["Giza", "Aswan", "Giza", "Cairo", "Alex", "Menoufia", "Aswan", "Aswan"];



// function
 

let donors=[];
function addDonor() {
 
    // prit values match
  for (let i in ids, names, bloods, genders , ages, weights, dates, phones, addresses) {

     if((selected_blood_groub == bloods[i]) && (selected_country == addresses[i])){
        let donor = [];
        donor.push(ids[i]);
        donor.push(names[i]);
        donor.push(bloods[i]);
        donor.push(genders[i]);
        donor.push(ages[i]);
        donor.push(weights[i]);
        donor.push(dates[i]);
        donor.push(phones[i]);
        donor.push(addresses[i]);

        donors.push(donor);
        res.innerHTML = "";
        for (let i = 0; i < donors.length; i++) {
            res.innerHTML += `
        <div class="donor">
            <h3>${donors[i][1]} </h3>
            <span>Id :${donors[i][0]} <span>
            <span>Blood Groub :${donors[i][2]} <span>
            <span>Gender :${donors[i][3]} <span>
            <span>Age :${donors[i][4]} <span>
            <span>Weight :${donors[i][5]} <span>
            <span>Last Donate :${donors[i][6]} <span>
            <span>Phone :${donors[i][7]} <span>
            <span>Address :${donors[i][8]} <span>
       
        </div>
        `
        }
        ids[i] = names[i] = bloods[i] = genders[i] = ages[i] = weights[i] = dates[i] = phones[i] = addresses[i] = "";
        donor=[];
      }
     
   }
   donors=[];
}
