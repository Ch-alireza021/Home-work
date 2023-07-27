// let computer=''
// function computerChoice(){
//      computer=Math.trunc(Math.random()*3);
//     return computer;
// }
// switch(computer){
//         case 0 : computer='سنگ';
//             break;
//         case 1 : computer='کاغذ';
//             break;
//         case 2 : computer='قیچی';
//             break;
//     }

function computerChoice() {
    const choices = ["سنگ", "کاغذ", "قیچی"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
let userChoice=prompt("سنگ یا کاغذ یا قیچی؟؟؟کدوم؟؟");
function playGame(){
const computer = computerChoice();
if(computer===userChoice){
    alert('مساوی شدید');
    // setTimeout(location.reload(), 3000);
}else if((userChoice==='سنگ'&&computer==='قیچی')
||(userChoice==='کاغذ'&&computer==='سنگ')
||(userChoice==='قیچی'&&computer==='کاغذ')){
    alert(`انتخابت ${userChoice} بود و انتخاب ما ${computer} ای بابا برنده شدی`)
    // setTimeout(location.reload(), 3000);

}else{
    alert(`انتخابت ${userChoice} بود و انتخاب ما ${computer} باختی عمو جون`);
    // setTimeout(location.reload(), 3000);
}}

while(userChoice!=='0'){
    playGame();
    userChoice=prompt("سنگ یا کاغذ یا قیچی؟؟؟کدوم؟؟");
}
