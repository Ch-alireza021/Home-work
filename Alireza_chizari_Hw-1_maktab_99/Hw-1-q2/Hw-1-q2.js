
let inputuser = prompt("Please enter your input:");

if (!isNaN(inputuser)) {
    alert("The original input is a number.");
} else if ((inputuser==='true')||(inputuser==='false')){
  alert("Boolean");
} else if  (typeof input === "string"){
  alert("The original input is a string.");
} else {
  alert("I can't tell what kind it is")
}

