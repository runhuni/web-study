let count = 0;
const countEI = document.getElementById('count');
const plusEI1 = document.getElementById('plus');
const minusEI = document.getElementById('minus');
console.log(countEI, plusEI1, minusEI);
plusEI1.addEventListener('click', function () {
  count++;
  render();
  countEI.innerText = count;
});
minusEI.addEventListener('click', function () {
  count--;
  render();
  countEI.innerText = count;
});

function render() {
  console.log('호출됐음');
  if (count < 3) {
    countEI.style.color = 'blue';
  }
  if (count > 3) {
    countEI.style.color = 'red';
  }
}
