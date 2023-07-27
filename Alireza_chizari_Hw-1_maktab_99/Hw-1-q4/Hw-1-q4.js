let usernumber_1=prompt('enter first number');
let usernumber_2=prompt('enter second number');
let sum=parseInt(usernumber_1)+parseInt(usernumber_2);

if (isNaN(usernumber_1)===true){
    alert('first inpute is not a number');
} else if(isNaN(usernumber_2)===true){
    alert('second inpute is not a number')
}else {
    alert(sum)
}