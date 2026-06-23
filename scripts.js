function add(a, b) {
  return a + b;
}
function substact(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
let currentNumber = "";
let finalNumber = "";
let operator = "";
let newOp;

function operate(operator, num1, num2) {
  let result;
  num1 = +num1;
  num2 = +num2;
  if (operator == "+") {
    result = add(num1, num2);
  } else if (operator == "-") {
    result = substact(num1, num2);
  } else if (operator == "x") {
    result = multiply(num1, num2);
  } else if (operator == "/") {
    result = divide(num1, num2);
  }
  return result;
}

let btns = document.querySelectorAll(".btn");
let display = document.querySelector(".display");
for (const btn of btns) {
  btn.addEventListener("click", () => {
    if (btn.textContent == "0" && display.textContent == 0) {
      currentNumber = "0";
      display.textContent = currentNumber;
    } else {
      currentNumber += btn.textContent;
      display.textContent = currentNumber;
    }
  });
}

let opes = document.querySelectorAll(".ope");
for (const ope of opes) {
  ope.addEventListener("click", () => {
    if (newOp == "" && operator == "") {
      newOp = operator = ope.textContent;
    } else {
      operator = newOp;
      newOp = ope.textContent;
    }
    if (finalNumber == "") finalNumber = currentNumber;
    else finalNumber = operate(operator, finalNumber, currentNumber);
    display.textContent = finalNumber;
    currentNumber = "";
  });
}

let res = document.querySelector(".res");
res.addEventListener("click", () => {
  let result = operate(newOp, finalNumber, currentNumber);
  console.log(result);
  display.textContent = result;
});

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  display.textContent = "0";
  currentNumber = "";
  finalNumber = "";
  operator = "";
  newOp = "";
});
