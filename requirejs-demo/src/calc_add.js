let addContainer = document.getElementById("calc-add");
let addBtn = addContainer.children[3];
let outFieldAdd = addContainer.children[4];

addBtn.onclick = function(ev) {
  let num1 = addContainer.children[0].value;
  let num2 = addContainer.children[2].value;
  if (!isNaN(parseFloat(num1)) && !isNaN(parseFloat(num2))) {
    outFieldAdd.textContent = parseFloat(num1) + parseFloat(num2);
  } else {
    console.log(num1);
    console.log(num2);
  }
};