const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    mainInput()
})

function mainInput() {
    const emailValue = email.value.trim()

    if(email.value === '' || email.value == null) {
        setErrorFor(email, 'Email cannot be empty')
    } else {
        setSuccessFor(email)
    }

}

function setErrorFor(input, message) {
    const formControl = input.parentElement // .form-control
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;

    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}
