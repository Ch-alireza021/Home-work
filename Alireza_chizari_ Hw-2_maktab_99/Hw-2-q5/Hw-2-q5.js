// function myreload(){
//     return location.reload()
// }

function check(answer){
    if(!isNaN(answer)){
     if(0<answer &&answer<5){
    return answer;}else {
        alert('Your number must be between one to four');
        // myreload()
        location.reload()
    }
} else {
    alert('Your number must be between one to four');
    location.reload()}
}
function end(){
    console.log('-----------------------------------------------------------')
}



console.log(`1) What will the value of citrus be in the below code?`);
console.log('\n')
console.log(`var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
\n\
1) ["Banana", "Lemon"]
2) ["Lemon", "Apple"]
3) ["Orange", "Lemon"]
4) ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']`)

let score=0;
 const answerQ1=+prompt('Enter the number of the answer to question one');
 check(answerQ1)
 if(answerQ1===3){
        score++;
    }
    // console.log(score)
end()


 
 console.log(`2) Let's say you want to repeat a shape 20 times. Which for loop would help you code that?`);
 console.log('\n');

 console.log(`1) for (var i = 1; i < 20; i++) { }
2) for (var i = 0; i < 20; i++) { }
3) for (var i = 0; i <= 20; i++) { }
4) for (var i = 0; i > 20; i++) { }`)

const answerQ2=+prompt('Enter the number of the answer to question two');
check(answerQ2)
if(answerQ2===2){
       score++;
   }
//    console.log(score)
end()


console.log(`3)How would you access the second element in an array?`)
console.log('\n')

console.log(`1) nums.2
2) nums_1
3) nums[1]
4) nums[2]`)

const answerQ3=+prompt('Enter the number of the answer to question three');
check(answerQ3);
if(answerQ3===3){
    score++;
}
// console.log(score)

end()



console.log(`Select the rule set to make all the text in your web page blueand centered. `)
console.log('\n')

console.log(`1)p { color: blue;}
2)body{ text-align: left; color: blue}
3)p { text-align: center; color: blue }
4)body {text-align: center; color: blue }`)

const answerQ4=+prompt('Enter the number of the answer to question four');
check(answerQ4);
if(answerQ4===4){
    ++score;
}
// console.log(score)

end()
console.log(`your score is ${score} from 4`)