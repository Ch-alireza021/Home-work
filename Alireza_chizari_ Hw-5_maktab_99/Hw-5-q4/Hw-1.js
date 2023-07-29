// const form=document.querySelector('#form');
// const toast=document.querySelector('#toast');

// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const formData=Object.fromEntries(new FormData(form).entries())
//     console.log(formData);
//     tost(formData)
//     form.reset()
// })

// const topOrBottom=function(formData){
//     const distance1=formData.distance1
//     console.log(distance1);
//     const distance2=formData.distance2
//     console.log(distance2);
// console.log(formData.loc1);
//     formData.loc1==top ? toast.style.top=`${distance1}px`
//     : toast.style.bottom=`${distance1}px`;
//     formData.loc2==left ? toast.style.left=`${distance2}px`
//     : toast.style.right=`${distance2}px`;
// }

// const tost=function(formData){
//     const showMassage=formData.showMassage
//     console.log(showMassage);
//     toast.textContent=showMassage
//     topOrBottom(formData)

// }

const form = document.querySelector("#form");
const toast = document.querySelector("#toast");
const submit = document.querySelector("#submit");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(form).entries());
  console.log(formData);
  tost(formData);
  setTimeout(() => {
    toast.style.display = "none";
  }, 3000);
  // form.reset()
});

let topOrBottom = function (formData) {
  let distance1 = formData.distance1;
  console.log(distance1);
  let distance2 = formData.distance2;
  console.log(distance2);
  console.log(formData.loc1);
  console.log(formData.loc2);

  toast.style.top = "";
  toast.style.bottom = "";
  toast.style.left = "";
  toast.style.right = "";

  formData.loc1 == "top"
    ? (toast.style.top = `${distance1}px`)
    : (toast.style.bottom = `${distance1}px`);
  formData.loc2 == "left"
    ? (toast.style.left = `${distance2}px`)
    : (toast.style.right = `${distance2}px`);
};

const tost = function (formData) {
  const showMassage = formData.showMassage;
  console.log(showMassage);
  toast.style.display = "block";
  toast.textContent = showMassage;
  topOrBottom(formData);
};
