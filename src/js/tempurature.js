// tempurature-form
const tempuratureForm = {
  fromValue: null,
  fromSelect: document.getElementById('from-select').value,
  toValue: null,
  toSelect: document.getElementById('to-select').value,
  calculate: function () {
    const { fromValue, fromSelect, toSelect } = this;

    if (fromSelect === 'farenheight' && toSelect === 'celsius') {
      this.toValue = ((fromValue - 32) * 5) / 9;
    }
    document.getElementById('to-value').value = this.toValue;
  },
  form: document.querySelector('.form'),
};

const tempuratureFromInput = tempuratureForm.form.querySelector('#from-value');
console.log('Tempurature : ', tempuratureForm);

tempuratureForm.form.addEventListener('input', e => {
  e.preventDefault();
  const { name, value } = e.target;
  //   console.log(name, value);

  switch (name) {
    case 'from-value':
      tempuratureForm.fromValue = value;
      break;
    case 'from-select':
      tempuratureForm.fromSelect = value;
      break;
    case 'to-select':
      tempuratureForm.toSelect = value;
      break;
    default:
      break;
  }
  tempuratureForm.calculate();
  console.log('Tempurature : ', tempuratureForm);
});
