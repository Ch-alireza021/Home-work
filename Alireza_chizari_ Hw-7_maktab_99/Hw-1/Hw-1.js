const salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };
  
  const topSalary = function (obj) {
    const arr = Object.entries(obj);
    const sorting = arr.sort((a, b) => b[1] - a[1]);
    const [theBig] = sorting;
    console.log(theBig);
    console.log(` ${theBig[0]}  has top salary 🎭`);
    console.log(` his salary is : ${theBig[1]} 🎭`);
  };
  
  topSalary(salaries);
  