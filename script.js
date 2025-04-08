function clickSubmitButton(event){
    event.preventDefault();
    const username=document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const welcomemessage=document.getElementById('welcomemessage');
    welcomemessage.textContent='Welcome, '+username + '! Registration completed.';
    welcomemessage.style.display='block';
}