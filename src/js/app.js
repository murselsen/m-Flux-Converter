// tempurature-form
const tempuratureForm = {
  from: document
    .querySelector('#tempurature-form')
    .querySelector('#from-select').value,
  to: document.querySelector('#tempurature-form').querySelector('#to-select')
    .value,
  calculate: function (from, to) {
    e.preventDefault();
    console.log(e.target.value);
  },
  form: document.querySelector('#tempurature-form'),
  fromInput: document
    .querySelector('#tempurature-form')
    .querySelector('#from-value'),
};

const tempuratureFromInput = tempuratureForm.form.querySelector('#from-value');

tempuratureForm.form.addEventListener('input', e => {
  e.preventDefault();
  console.log(e.target.value);
});
