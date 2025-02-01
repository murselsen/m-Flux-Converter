// tempurature-form
const tempuratureForm = {
  fromValue: null,
  fromSelect: document.getElementById('from-select').value,
  toValue: null,
  toSelect: document.getElementById('to-select').value,
  calculate: function () {
    const { fromValue, fromSelect, toSelect } = this;
    if (fromValue !== null) {
      let frValue = parseFloat(fromValue);
      // Farenheight to Celsius
      if (fromSelect === 'farenheight' && toSelect === 'celsius') {
        this.toValue = (((frValue - 32) * 5) / 9).toFixed(2);
      }
      // Farenheight to Farenheight
      if (fromSelect === 'farenheight' && toSelect === 'farenheight') {
        this.toValue = frValue.toFixed(2);
      }

      if (fromSelect === 'farenheight' && toSelect === 'kelvin') {
        // (°F + 459.67) × 5/9
        console.log('Farenheight to Kelvin');

        this.toValue = (((frValue + 459.67) * 5) / 9).toFixed(2);
      }
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
});
