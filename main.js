const numbers = document.querySelectorAll(".number");
const result = document.querySelector(".result span");
const signs = document.querySelectorAll(".sign");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");
const input = document.querySelector("input");
const comma = document.querySelector(".comma");

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", (num) => {
    let atr = num.target.getAttribute("value");
    if (isFirstValue === false) {
      getFirstValue(atr);
    }
    if (isSecondValue === false) {
      getSecondValue(atr);
    }
  });
}

function getFirstValue(num) {
  input.setAttribute("value", "");
  firstValue += num;
  input.setAttribute("value", firstValue);
}

function getSecondValue(num) {
  if (firstValue != "" && sign != "") {
    secondValue += num;
    input.setAttribute("value", secondValue);
  }
}
// Get sign oparator
function getSign() {
  for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener("click", (e) => {
      sign = e.target.getAttribute("value");
      isFirstValue = true;
    });
  }
}
getSign();
// Equal button
equals.addEventListener("click", () => {
  input.setAttribute("value", "");
  let numFirstValue = Number(firstValue);
  let numSecondValue = Number(secondValue);
  if (sign === "+") {
    resultValue = numFirstValue + numSecondValue;
  } else if (sign === "-") {
    resultValue = numFirstValue - numSecondValue;
  } else if (sign === "*") {
    resultValue = numFirstValue * numSecondValue;
  } else if (sign === "/") {
    resultValue = numFirstValue / numSecondValue;
  }
  firstValue = resultValue;
  secondValue = "";
  checkResultLength();
});
// Check result length
function checkResultLength() {
  if (resultValue.toString().length > 9) {
    input.setAttribute("value", parseFloat(resultValue).toPrecision(3));
  } else {
    input.setAttribute("value", resultValue);
  }
}
// Negative button
negative.addEventListener("click", () => {
  input.setAttribute("value", "");
  if (firstValue !== "" && secondValue !== "" && sign !== "") {
    resultValue = -resultValue;
  }
  if (firstValue !== "") {
    resultValue = -firstValue;
    firstValue = resultValue;
  }
  result.innerHTML = resultValue;
});
// Percent button
percent.addEventListener("click", () => {
  input.setAttribute("value", "");
  if (firstValue !== "" && secondValue !== "" && sign !== "") {
    resultValue = resultValue / 100;
  }
  if (firstValue !== "") {
    resultValue = firstValue / 100;
    firstValue = resultValue;
  }
  input.setAttribute("value", resultValue);
});
// Clear button
clear.addEventListener("click", () => {
  input.setAttribute("value", 0);
  firstValue = "";
  isFirstValue = false;
  secondValue = "";
  isSecondValue = false;
  sign = "";
  resultValue = 0;
});
