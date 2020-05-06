let multiplyContainer = document.getElementById("calc-multiply");
let multiplyBtn = multiplyContainer.children[3];
let outFieldMultiply = multiplyContainer.children[4];

multiplyBtn.onclick = function(ev) {
  let num1 = multiplyContainer.children[0].value;
  let num2 = multiplyContainer.children[2].value;
  if (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
    outFieldMultiply.textContent = parseFloat(num1) * parseFloat(num2);
  } else {
    console.log(num1);
    console.log(num2);
  }
};