const fromSelect = document.getElementById('from-select');
const toSelect = document.getElementById('to-select');

const calculates = {
  // tempurature
  tempurature: {
    // Farenheight
    'farenheight-to-celsius': farenheight =>
      (((farenheight - 32) * 5) / 9).toFixed(2),
    'farenheight-to-kelvin': farenheight =>
      (((farenheight + 459.67) * 5) / 9).toFixed(2),
    'farenheight-to-farenheight': farenheight => farenheight.toFixed(2),
    // Celsius
    'celsius-to-farenheight': celsius => (celsius * (9 / 5) + 32).toFixed(2),
    'celsius-to-kelvin': celsius => (celsius + 273.15).toFixed(2),
    'celsius-to-celsius': celsius => celsius.toFixed(2),
    // Kelvin
    'kelvin-to-farenheight': kelvin => (kelvin * (9 / 5) - 459.67).toFixed(2),
    'kelvin-to-celsius': kelvin => (kelvin - 273.15).toFixed(2),
    'kelvin-to-kelvin': kelvin => kelvin.toFixed(2),
  },
  weightMass: {
    'gram-to-gram': gram => gram.toFixed(2),
    'gram-to-milligram': gram => (gram * 1000).toFixed(2),
    'gram-to-kilogram': gram => (gram / 1000).toFixed(2),
    'milligram-to-gram': milligram => (milligram / 1000).toFixed(2),
    'milligram-to-milligram': milligram => milligram.toFixed(2),
    'milligram-to-kilogram': milligram => (milligram / 1000000).toFixed(2),
    'kilogram-to-gram': kilogram => (kilogram * 1000).toFixed(2),
    'kilogram-to-milligram': kilogram => (kilogram * 1000000).toFixed(2),
    'kilogram-to-kilogram': kilogram => kilogram.toFixed(2),
  },
};

// tempurature-form
const appForm = {
  fromValue: null,
  fromSelect: document.getElementById('from-select').value,
  toValue: null,
  toSelect: document.getElementById('to-select').value,
  calculate: function () {
    const { fromValue, fromSelect, toSelect, form } = this;
    if (fromValue !== null) {
      let frValue = parseFloat(fromValue);
      let result = calculates[form.id][`${fromSelect}-to-${toSelect}`](frValue);
      this.toValue = result;
    }

    document.getElementById('to-value').value = this.toValue;
  },
  form: document.querySelector('.form'),
};

const appFormInput = appForm.form.querySelector('#from-value');
console.log(calculates);
console.log('App Form : ', appForm);

appForm.form.addEventListener('input', e => {
  e.preventDefault();
  const { name, value } = e.target;
  //   console.log(name, value);

  switch (name) {
    case 'from-value':
      appForm.fromValue = value;
      break;
    case 'from-select':
      appForm.fromSelect = value;
      break;
    case 'to-select':
      appForm.toSelect = value;
      break;
    default:
      break;
  }
  appForm.calculate();
});
