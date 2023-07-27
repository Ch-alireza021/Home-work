let firstUsernumbere=+prompt('Enter first number');

let min=0
// Greatest common divisor (GCD)
function GCD(a, b) {
  (a < b)  ? min = a:  min = b;
     
     while (min > 0) {
       if (a % min === 0 && b % min === 0) {
         return min;
       } else {
         min = min - 1;
       }
     }
   }
 



if(!isNaN(firstUsernumbere)){
  let secondtUsernumbere=+prompt('Enter second number');
    if(!isNaN(secondtUsernumbere)){
   LCM = (firstUsernumbere * secondtUsernumbere) / GCD(firstUsernumbere, secondtUsernumbere);
   // Lowest common multiple(LCM)
    alert(`بزرگ ترین مقسوم علیه مشترک  =${GCD(firstUsernumbere,secondtUsernumbere)} `)
    alert(`کوچیک ترین مضرب مشترک =${LCM}`)}
else {
  alert('you did not enter a number');
  location.reload();}}else{
     alert('you did not enter a number');
     location.reload()}


 

  
