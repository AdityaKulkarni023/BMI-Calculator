const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    let message = '';
    if (bmi < 18.6) {
      message = 'Underweight';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = 'Normal Weight';
    } else {
      message = 'Overweight';
    }

    results.innerHTML += `<p>${message}</p>`;
  }
});
