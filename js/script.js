document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    let name = document.getElementById('name').value.trim();
    let password = document.getElementById('password').value.trim();
    let confirmPassword = document.getElementById('confirmPassword').value.trim();
    let email = document.getElementById('email').value.trim();
    let telefon = document.getElementById('telefon').value.trim();

    let nameError = document.getElementById('nameError');
    let passwordError = document.getElementById('passwordError');
    let emailError = document.getElementById('emailError');
    let telefonError = document.getElementById('telefonError');
    let confirmPasswordError = document.getElementById('confirmPasswordError');

    let isValid = true;

    if (name.length <2) {
        nameError.textContent = "Navn skal være mindst 2 karakterer. ";
        nameError.style.display = 'block'; 
        isValid = false; 
    } else {
        nameError.style.display = 'none';
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/; 
    if (!password.match(passwordPattern)) {
        passwordError.textContent = "Adgangskoden skal være mindst 8 karakterer, indeholde mindst 1 stort bogstav og 1 specialtegn !@#$%^&*."; 
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.style.display = 'none'; 
    }

    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Adgangskoderne stemmer ikke overens."
        confirmPasswordError.style.display = 'block'
        isValid = false; 
    } else {
        confirmPasswordError.style.display = 'none'; 
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        emailError.textContent = "Indtast en gyldig e-mail";
        emailError.style.display = 'block'; 
        isValid = false;
    } else {
        emailError.style.display = 'none'
    }

    const telefonPattern = /^[0-9]{8}$/;
    if (!telefon.match(telefonPattern)) {
        telefonError.textContent = "Telefonnummeret er ugyldigt"
        telefonError.style.display = 'block';
        isValid = false;
    } else {
        telefonError.style.display = 'none';
    }

    if (isValid) {
        alert("Formularen er korrekt udfyldt!"); 
    }
})

document.getElementById('iconPassword').addEventListener('click', function () {
    let passwordField = document.getElementById('password');
    let showIcon = document.getElementById('showIcon');
    let hideIcon = document.getElementById('hideIcon');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text'; 
        showIcon.style.display = 'none'; 
        hideIcon.style.display = 'inline'; 
    } else {
        passwordField.type = 'password'; 
        showIcon.style.display = 'inline'; 
        hideIcon.style.display = 'none';
    }
});


document.getElementById('iconConfirmPassword').addEventListener('click', function () { 
    let confirmPasswordField = document.getElementById('confirmPassword');
    let confirmShowIcon = document.getElementById('confirmShowIcon');
    let confirmHideIcon = document.getElementById('confirmHideIcon');
    
    if(confirmPasswordField.type === 'password') {
        confirmPasswordField.type = 'text';
        confirmShowIcon.style.display = 'none';
        confirmHideIcon.style.display = 'inline';
    } else {
        confirmPasswordField.type = 'password';
        confirmShowIcon.style.display = 'inline';
        confirmHideIcon.style.display = 'none';
    }
}); 