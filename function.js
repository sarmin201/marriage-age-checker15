
//showing error message for all fields
const setAlert=(message)=>{

    return`<p style="color:red;">${message}</p>`
}

//checking age is valid
const numCheck=(num)=>{
let agePattern=/^[0-9]{1,3}$/;

return agePattern.test(num);


}

//marriage check calculator

const marriageAgeCheck=(name, age, gender)=>{
if(gender=="Male"){
   let  marriage_age=21;

   if(age>=21){

    return ` Hi ${name}, <p style="color:green">your age is okay to get married </p>`;
   }
   else{
    return ` Hi ${name}, <p style="color:red">your age is not okay to get married, you have to wait for${marriage_age-age},</p>`;
   }
}
else{
   let  marriage_age=18;
    if(age>=18){

        return ` Hi ${name},<p style="color:green"> your age is okay to get married</p>`;
       }
       else{
        return ` Hi ${name},<p style="color:red">your age is not okay to get married, you have to wait for ${marriage_age-age} years`;
       }
}


}