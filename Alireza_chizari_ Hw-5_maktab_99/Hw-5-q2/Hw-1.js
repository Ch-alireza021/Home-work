let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
let reset = document.querySelector("#reset");
let show = document.querySelector("#show");
let showDisplay = document.querySelector(".show");

let flag = false;
const flagFunc = function () {
  flag
    ? (showDisplay.textContent = walk.steps)
    : (showDisplay.textContent = " ");
};

let walk = {
  steps: 0,
  // ----- increase -----

  increase: () => {
    walk.steps++;
    flagFunc();
  },
  // -----decrease-----
  decrease: () => {
    walk.steps > 0 ? walk.steps-- : (walk.steps = 0);
    flagFunc();
  },
  // -----reset-----
  reset: () => {
    walk.steps = 0;
    flagFunc();
  },
  // -----read-----

  read: () => {
    if (!flag) {
      showDisplay.textContent = walk.steps;
      flag = true;
    } else {
      showDisplay.textContent = " ";
      flag = false;
    }
  },
};

increase.addEventListener("click", walk.increase);
decrease.addEventListener("click", walk.decrease);
reset.addEventListener("click", walk.reset);
show.addEventListener("click", walk.read);

// ---------------------------------------------------

let walk_2 = {
  step: 0,
  increase: function () {
    this.step++;
    return this;
  },
  decrease: function () {
    this.step--;
    return this;
  },
  reset: function () {
    this.step = 0;
    return this;
  },
  read: function () {
    console.log(this.step);
    return this;
  },
};

walk_2.increase().increase().increase().read();
walk_2.increase().increase().increase().decrease().decrease().read();
walk_2.increase().increase().increase().decrease().reset().read();
