const input = document.getElementById("inputField");
const output = document.getElementById("outputData");

const taxCalculator = (money) => {
  const tax = money * 0.25;
  output.innerHTML = tax.toFixed(2);
};

input.addEventListener("keyup", () => {
  taxCalculator(input.value);
});
