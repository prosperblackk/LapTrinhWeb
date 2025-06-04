const button = document.querySelector('.button');

button.addEventListener('click', () => {
  console.log('Button clicked!!!');
});

function concatString2(thamSo1, thamSo2) {
  return thamSo1 + thamSo2;
}
concatString2('1', '1');