
let char=prompt('Enter a character');
let amount=prompt('How many lines do you want?')
let sum=char+" "

function print(amount,char){
for(i=1;i<amount;i++){
    sum+=char+" ";
    console.log(sum);
}
}
console.log(char)
print(amount,char)


// function printLines(numLines, char) {
//     for (let i = 1; i <= numLines; i++) {
//       console.log(char.repeat(i));
//     }
//   }
//   const numLines = prompt("Enter the number of lines:");
//   const char = prompt("Enter the character to print:");
//   printLines(parseInt(numLines), char);