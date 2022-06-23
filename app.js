//get elements

const age_form=document.getElementById("age_form");
const msg=document.querySelector(".msg");
const msgLong=document.querySelector(".msg-long");

//subbit age form

age_form.onsubmit=(event)=>{

event.preventDefault();
//get fields value

let name=age_form.querySelector('input[name="name"]');
let age=age_form.querySelector('input[name="age"]');
let gender=age_form.querySelectorAll('input[name="gender"]');

//get gender value
let gender_name="";

gender.forEach(item=>{

if(item.checked){
gender_name=item.value ;
}

})

//form validation

if(name.value=="" || age.value=="" || gender_name=="")
{
msg.innerHTML=setAlert("All fields are required");
}
else if (numCheck(age.value)==false){
    msg.innerHTML=setAlert("Invalid age");
}

else{

    msgLong.innerHTML=marriageAgeCheck(name.value, age.value,gender_name);
}


 

}