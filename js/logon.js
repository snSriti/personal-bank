// login part
document.getElementById('login-btn').addEventListener('click',function(){
    const userEmail = document.getElementById('user-mail');
    const email = userEmail.value;

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;

    console.log(email, password);

    if(email === 'sriti@gmail.com' && password === 'sriti'){
        window.location.href = 'bank.html';
        console.log('text');
    }
    else{
        alert('Invalid user')
    }
})