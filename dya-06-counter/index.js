const numberText = document.getElementById('number');
const upButton = document.getElementById('up-btn');
const resetButton = document.getElementById('reset-btn');

let count = 0;

upButton.addEventListener('click', () => {
  count = count + 1;
  numberText.textContent = count;
});

resetButton.addEventListener('click', () => {
  count = 0;
  numberText.textContent = count;
});
