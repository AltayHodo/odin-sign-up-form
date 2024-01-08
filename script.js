const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const doNotMatch = document.querySelector('.do-not-match')
const form = document.getElementById('odin_form')

confirmPassword.addEventListener('input', checkPasswordMatch);  
password.addEventListener('input', checkPasswordMatch);

function checkPasswordMatch(){
  const passwordValue = password.value;
  const confirmValue = confirmPassword.value;
  if(passwordValue !== confirmValue && passwordValue && confirmValue){
    doNotMatch.classList.add('active');

  }else{
    doNotMatch.classList.remove('active');
  }
}

form.addEventListener('submit', (event) => {
  const passwordValue = password.value;
  const confirmValue = confirmPassword.value;
  if(passwordValue !== confirmValue){
    event.preventDefault();
    alert('Your passwords dont match!');
  }
});