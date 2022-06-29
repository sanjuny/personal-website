var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var PhoneError = document.getElementById('number-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');


function validateName(){
    var name = document.getElementById('contact-name').value;      
    if(name.length == 0){
        nameError.innerHTML = 'Name is Required';
        return false;
    }
    if(!name.match(/^[a-zA-z]+\s{1}[a-zA-z]*$/)){
        nameError.innerHTML = 'Enter full name';
        return false;
    }
    nameError.innerHTML = '';
    return true;


}


function validatePhone(){

    var Phone = document.getElementById('contact-phone').value;
    console.log(Phone);
    if(Phone.length == 0){
        PhoneError.innerHTML = 'Phone no is Required';
        return false;
    }
    if(Phone.length !==10){
        PhoneError.innerHTML = 'Phone no should be 10 digits';
        return false;
    }
    if(!Phone.match(/^[0-9]{10}$/)){     
       PhoneError.innerHTML = 'Phone no is required';
       return false;
    }

    PhoneError.innerHTML = '';
    return true;
}

function validateemail(){

    var email = document.getElementById('contact-email').value;
    console.log(email);

    if(email.length == 0){
        emailError.innerHTML = 'Email is required'
        return false;
    }
    if(!email.match(/^[a-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,6}$/)){
        emailError.innerHTML = 'email invalid'
        return false;
    }
    if(email == "sanjuny07@gmail.com"){
        emailError.innerHTML = 'you cant use this mail id'
        return false;
    }

    emailError.innerHTML='';
    return true; 

}
function validatemessage(){

    var message = document.getElementById('contact-message').value;

    var required = 30;

    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + 'more characters required';
        return false;
    }

    messageError.innerHTML = '';
    return true;
}
function validatesubmit(){

    if(!validateName() || !validateemail() || !validatePhone() ||  !validatemessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;
    }
    submitError.innerHTML = '';
    return true;
}



$("#submit-form").submit((e) => {
    e.preventDefault();
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxwz36RQYAGJBLoop56YVqJyWCiI5EO0yP0UKQJ/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        alert("Form submitted successfully");
        window.location.reload();
        //window.location.href="https://google.com"
      },
      error: function (err) {
        alert("Something Error");
      },
    });
  });
