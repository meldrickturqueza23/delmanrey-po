const btnLogin = document.getElementById('btnLogin');
const username = document.getElementById('username');
const password = document.getElementById('password');

btnLogin.addEventListener('click', (e)=>{
    e.preventDefault();
    if (username.value === "123" && password.value === "123"){
        alert('Login Successfull!');
        window.location.href="main.html";
    }else{
        alert('mali password mo tanga');
    }
});