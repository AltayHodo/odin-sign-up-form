const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const doNotMatch = document.querySelector('.do-not-match')

confirmPassword.addEventListener('input', checkPasswordMatch);  
password.addEventListener('input', checkPasswordMatch);

function checkPasswordMatch(){
  const passwordValue = password.value;
  const confirmValue = confirmPassword.value;
  if(passwordValue !== confirmValue && passwordValue && confirmValue){
    doNotMatch.classList.add('active');
    password.classList.add('error')
    confirmPassword.classList.add('error')
  }else{
    doNotMatch.classList.remove('active');
    password.classList.remove('error')
    confirmPassword.classList.remove('error')
  }
  console.log(passwordValue);
  console.log(confirmValue)
}