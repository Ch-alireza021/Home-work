// let userName=prompt('Enter your username');
// let confirm=prompt('confirm your username','confirm');

// if ((confirm==='confirm')&&(isNaN(userName)===true)){
//     alert('hello '+userName);
// } else if ((isNaN(userName)===false)){
//     alert('username type is incorrect');   
// } else {
//     alert('Username not confirmed');
// }


 
let userName=prompt('Enter your username');
if ((isNaN(userName)===true)){
    let conf=confirm(`do you comnfirm ${userName}`);
    if(conf==true){
        alert(`hello ${userName}`)
    } else {
        alert(`you didn't confirm ${userName}`)
    }
}else (alert("username type is incorrect "))

