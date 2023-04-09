const mainTitle = document.querySelector('#title');
let curValue = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', () => {
  curValue++;
  mainTitle.textContent = curValue;
  updateTitleColor();
});

btnDecrement.addEventListener('click', () => {
  curValue--;
  mainTitle.textContent = curValue;
  updateTitleColor();
});

btnReset.addEventListener('click', () => {
  curValue = 0;
  mainTitle.textContent = curValue;
  updateTitleColor();
});

function updateTitleColor() {
  mainTitle.classList.remove('positive', 'negative', 'zero');
  if (curValue > 0) {
    mainTitle.classList.add('positive');
  } else if (curValue < 0) {
    mainTitle.classList.add('negative');
  } else {
    mainTitle.classList.add('zero');
  }
}