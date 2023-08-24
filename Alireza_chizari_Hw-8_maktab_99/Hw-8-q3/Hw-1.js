function counterMaker() {
  let counter = 0;
  return function (input = 0) {
    counter += input;
    return counter;
  };
}

const counter = counterMaker();

console.log(counter()); // 0
console.log(counter()); // 0
console.log(counter(1)); // 1
console.log(counter()); // 1
console.log(counter(3)); //4
console.log(counter(-5));
