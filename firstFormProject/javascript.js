const submitButton = document.getElementsByClassName(".submit-button");

function validatePassword(){
    const firstPassword = document.getElementsByClassName(".password").value;
    const secondPassword = document.getElementsByClassName(".password-confirm").value;
    console.log(firstPassword);
    console.log(secondPassword);
}

submitButton.onclick = validatePassword();
