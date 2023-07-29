let form=document.querySelector('#form');
let sendBtn=document.querySelector('#sendBtn');
let showBtn=document.querySelector('#showBtn');

// sendBtn.addEventListener('clicl',function(){
//     const createUser = function (data) {
//         data.id = Date.now();
//         const getUser = JSON.parse(localStorage.getItem("users"));
//         const userDataArr = getUser ? getUser : [];}
// })



// form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const formData = Object.fromEntries(new FormData(form).entries());
//     console.log(formData)
//       createUser(formData);
//       form.reset();
//     }
//   );

//   let createUser=function(formData){
//     let getStorageData=JSON.parse(localStorage.getItem('users'));
//     let data= getStorageData ? getStorageData : [] ;
//     console.log(data);
//     data.push(formData);
//     localStorage.setItem("users", JSON.stringify(data));
//   }

form.addEventListener('submit',function(e){
    e.preventDefault();
    console.log('send');
    const formData = Object.fromEntries(new FormData(form).entries());
    userInfo(formData);
    form.reset()
})

let userInfo=function(formData){
    const storageData=JSON.parse(localStorage.getItem('users'))
    const data=storageData ? storageData : [];
    data.push(formData);
    localStorage.setItem('users',JSON.stringify(data))
}

showBtn.addEventListener('click',function(e){
    console.log('hi');
    e.preventDefault
    let storageData=JSON.parse(localStorage.getItem('users'));
    let sortage=storageData.map((element) => element).sort((a,b)=>a.age-b.age)
    sortage.forEach(sortage => {
        console.log(`${sortage.name} is ${sortage.age}`);
    });
})


