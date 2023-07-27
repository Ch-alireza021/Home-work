
function computerChoice() {
    const choices = ["سنگ", "کاغذ", "قیچی"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

let $=document
let userScore=0
let pcScore=0
let form=$.querySelector('form');
let btn=$.querySelector('.btn');
let modal=$.querySelector('.modal');


btn.addEventListener('click',
function(){
    let data=new FormData(form);
    for (const entry of data) {
        userChoice=entry[1];
        let computer = computerChoice();
if(computer===userChoice){
    modal.style.display='inline';
    modal.style.backgroundColor='#fff'
    modal.style.color='#202020'
    modal.innerText=(`انتخابت ${userChoice} بود و انتخاب ما ${computer}  مساوی شدیم شدیم ${userScore} به ${pcScore}`);
}else if((userChoice==='سنگ'&&computer==='قیچی')
||(userChoice==='کاغذ'&&computer==='سنگ')
||(userChoice==='قیچی'&&computer==='کاغذ')){
    modal.style.backgroundColor='#738d33';
    modal.style.color='#fff';
    modal.style.display='inline';
    ++userScore;
    modal.innerText=(`انتخابت ${userChoice} بود و انتخاب ما ${computer} ای بابا برنده شدی شدیم ${userScore} به ${pcScore}`)
}else{
    modal.style.color='#fff';
    modal.style.backgroundColor='red'
    modal.style.display='inline';
    ++pcScore;
    modal.innerText=(`انتخابت ${userChoice} بود و انتخاب ما ${computer} باختی عمو جون شدیم ${userScore} به ${pcScore}`);
}}
})
    
    