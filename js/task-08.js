const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault()
    
    const formEmail = loginForm.elements.email;
    const formPassword = loginForm.elements.password;
    
    if(formEmail.value === '' || formPassword.value === ''){
    return alert('Будь ласка, заповніть всі поля');
} 
    const formData ={
        email: formEmail.value,
        password: formPassword.value
    }


console.log(formData);
loginForm.reset()
})