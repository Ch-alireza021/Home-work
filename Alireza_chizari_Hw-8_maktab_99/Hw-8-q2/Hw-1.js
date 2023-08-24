function creatElem(element, callback) {
  let elem = document.createElement(element);
  console.log(elem);
  document.body.append(elem);
  callback(elem);
}

function callback(elem) {
  elem.style.backgroundColor = "red";
  elem.textContent = "just for test";
}

creatElem("div", callback);
