const sortFromHightoLow = (...array) => {
  let input = array;
  const newArr = input.map((item) => {
    return item;
  });
  const string = newArr.join().split(",");

  const sort = string.sort((a, b) => b - a);

  const arrOfNum = sort.map((str) => {
    return parseInt(str);
  });
  console.log(arrOfNum);
};

sortFromHightoLow([1, 5, 6, 2], [3, 7, 1], [4, 5, 6, 8, 9]);

// sortFromHightoLow([5, 6, 2], [3, 7, 1]); //===> 7,6,5,3,2,1
// sortFromHightoLow([5, 6, 2], [3, 7, 1], [2, 4, 8]); // ===> 8,7,6,5,4,3,2,2,1


