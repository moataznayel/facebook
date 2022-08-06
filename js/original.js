let emailcheck = /\S+@\S+\.\S+/;
let phonecheck = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
function validation() {
    let labelEmail = document.querySelector(".emaill");
    let inputEmail = document.querySelector('.mail');
    let labelPass = document.querySelector(".ptext");
    let inputPass = document.querySelector('.passwordd');
    console.log(labelEmail)
    console.log(inputEmail)


    if (!emailcheck.test(inputEmail.value)) {
        labelEmail.innerHTML = "Please Enter Valid Email"
        labelEmail.style.color = 'red'

        return false;
    }

    if (inputPass.value.length <= 8) {
        labelPass.innerHTML = "Please Enter Valid Email"
        labelPass.style.color = 'red'

        return false;
    }

    else {

        return true;
    }
}





function signin() {
    let myFrist;
    myFrist = document.querySelector('.frist-name')
    let myFLabel = document.querySelector('.frist')
    let myLast = document.querySelector('.last-name')
    let myLLast = document.querySelector('.last')
    let myEmail = document.querySelector('.email')
    let myLEmail = document.querySelector('.email-label')
    let myNumber = document.querySelector('.phone-number')
    let myLNumber = document.querySelector('.phone')
    let myPassword = document.querySelector('.password')
    let mypass = document.querySelector('.pass')
    let myConfirm = document.querySelector('.confirm')
    let mycon = document.querySelector('.con-pass')
    let myDateInput = document.querySelector('.date')
    let myBirth = document.querySelector('.birth')
    let mymale = document.querySelector('.male')
    let myfamale = document.querySelector('.famale')
    let myGender = document.querySelector('.gender')
    myLast = document.querySelector('.last-name')
    myLLast = document.querySelector('.last')

    if (myFrist.value === "" || !isNaN(myFrist.value) || myFrist.value.indexOf(" ") != -1) {
        myFLabel.innerHTML = "Please Enter Valid UserName"
        myFLabel.style.color = "red"

        return false
    }


    if (myLast.value === "" || !isNaN(myLast.value) || myLast.value.indexOf(" ") != -1) {
        myLLast.innerHTML = "Please Enter Valid LastName"
        myLLast.style.color = "red"

        return false
    }

    if (!emailcheck.test(myEmail.value)) {
        myLEmail.innerHTML = "Please Enter Valid Email"
        myLEmail.style.color = "red"
        return false
    }

    if (!phonecheck.test(myNumber.value)) {
        myLNumber.innerHTML = "Please Enter Valid Phone Number"
        myLNumber.style.color = "red"
        return false
    }

    if (myPassword.value.length <= 8) {
        mypass.innerHTML = "Please Enter Valid password"
        mypass.style.color = "red"
        return false
    }
    if (myConfirm.value != myPassword.value) {
        mycon.innerHTML = "Please Enter Valid confirm password"
        mycon.style.color = "red"
        return false
    }
    console.log(myDateInput)
    if (!isNaN(myDateInput.value)) {
        myBirth.innerHTML = "Please Enter Valid date"
        myBirth.style.color = "red"
        return false
    }
    if (mymale.checked !== true && myfamale.checked !== true) {
        myGender.innerHTML = "please enter valid gender"
        return false
    }

    else {
        return true
    }
}






