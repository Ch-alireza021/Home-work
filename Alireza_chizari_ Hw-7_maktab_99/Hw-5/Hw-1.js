let email=document.querySelector('#email')
let validShow=document.querySelector('.valid')
let count=0

function validat(){
    let valid=email.value
    count=0
        valid.indexOf('@')!==-1  ? count++ : ''
        valid.indexOf('.')!==-1  ? count++ : ''
   
            if(valid.length > 10 
                && count===2){
                    validShow.style.display='none'
                }else{
                    validShow.style.display='block'
            }
    }
   

email.addEventListener('blur',validat)