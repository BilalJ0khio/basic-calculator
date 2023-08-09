let numberOne = document.getElementById("fnumber");
let numberTwo = document.getElementById("snumber");
let result = document.getElementById("r");
let addition = document.getElementById("addition");
let multiplication = document.getElementById("multiplication");
let subrtraction = document.getElementById("subtraction");
let division = document.getElementById("divide");
let clear = document.getElementById("clear");
addition.addEventListener("click", function () {
  result.innerText = +numberOne.value + +numberTwo.value;
  //   numberOne.value = "";
  //   numberTwo.value = "";
});

subrtraction.addEventListener("click", () => {
  result.innerText = +numberOne.value - +numberTwo.value;
});

multiplication.addEventListener("click", () => {
  result.innerText = +numberOne.value * +numberTwo.value;
});

division.addEventListener("click", () => {
  if (numberOne.value != "")
    result.innerText = +numberOne.value / +numberTwo.value;
  else result.innerHTML = "0";
});

clear.addEventListener("click", () => {
  numberOne.value = "";
  numberTwo.value = "";
  result.innerText = "";
});
