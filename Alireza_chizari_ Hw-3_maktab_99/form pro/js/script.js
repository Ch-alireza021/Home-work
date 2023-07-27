


let userName=document.querySelector('.username')
let userPassword=document.querySelector('.password')
let userNamValidation=document.querySelector('.userNamValidation')
let userPasswordValidaition=document.querySelector('.userPasswordValidaition')
// -----------username------------

function usernameBlur () {
        // alert('username')
        if (userName.value.length < 11) {
            userNamValidation.style.color = 'red'
            userNamValidation.innerHTML = 'Must Contain 12 Character (Min)'
            userNamValidation.style.display = 'block'
            userNamValidation.style.marginBottom = '10px'

            // console.log('ok shod?')
        } else {
            userNamValidation.style.color = 'green'
            userNamValidation.innerHTML = 'Correct Username Value'
            setTimeout(() => {
                userNamValidation.style.display = 'none'
            },1500);
        }
}
// ------------password-----------

function passwordBlur(){
   if (userPassword.value.length<7){
    userPasswordValidaition.style.color = 'red'
    userPasswordValidaition.innerHTML = 'Must Contain 8 Character (Min)'
    userPasswordValidaition.style.display = 'block'
    userPasswordValidaition.style.marginBottom = '10px'
   } else {
    userPasswordValidaition.style.color = 'green'
    userPasswordValidaition.innerHTML = 'Correct Username Value'
    setTimeout(() => {
        userPasswordValidaition.style.display = 'none'
    }, 1500);
}}

// ----------login-------------
let login=document.querySelector('.login')
function userNameKey(){
    let userNameValue=userName.value;
    let userPasswordValue=userPassword.value;
    if(userNameValue.length <11 || userPasswordValue.length < 7 ){
        login.style.backgroundColor='rgb(223, 28, 28)'
    }else{
        login.style.backgroundColor=' #4CAF50'
    }
}

function dataValidation(){
    let modal=document.querySelector('.modal');
    let userNameValue=userName.value;
    let userPasswordValue=userPassword.value;

    if(userNameValue.length < 11 || userPasswordValue.length<7){
        modal.style.display='inline';
        modal.style. backgroundColor= 'rgb(223, 28, 28)';

        modal.innerHTML='لطفا اطلاعات لازم را به درستی وارد کنید'
    }else{
        modal.style.display='inline';
        modal.style.backgroundColor= '#76b852';
        modal.innerHTML='شما با موفقیت وارد شدید'
    }
    setTimeout(function(){
        modal.style.display="none"
    },3000)
}