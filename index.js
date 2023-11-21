let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let date1=document.getElementById("date")
let dateMsgEl=document.getElementById("dateer")


// Example usage






date1.addEventListener("blur",function(event){
    function calculateAge(birthdate) {
    // Convert the birthdate string to a Date object
    var birthDate = new Date(birthdate);

    // Get the current date
    var currentDate = new Date();

    // Calculate the difference in years
    var age = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}
    let userAge = calculateAge(event.target.value);
    if(55>=userAge>=18){
        dateMsgEl.textContent = "";
    }else{
      dateMsgEl.textContent = "only ment for 18 to 55 age*";
    }
  
});
nameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

emailEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
});

myFormEl.addEventListener("submit", function(event){
  event.preventDefault();
});