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

      switch (fromSelect) {
        // Farenheight
        case 'farenheight':
          switch (toSelect) {
            case 'farenheight':
              this.toValue = frValue.toFixed(2);
              break;
            case 'celsius':
              this.toValue = (((frValue - 32) * 5) / 9).toFixed(2);
              break;
            case 'kelvin':
              this.toValue = (((frValue + 459.67) * 5) / 9).toFixed(2);

              break;
          }
          break;

        // Celsius
        case 'celsius':
          switch (toSelect) {
            case 'farenheight':
              this.toValue = (frValue * (9 / 5) + 32).toFixed(2);
              break;
            case 'celsius':
              this.toValue = frValue.toFixed(2);
              break;
            case 'kelvin':
              this.toValue = (frValue + 273.15).toFixed(2);

              break;
          }
          break;
        case 'kelvin':
          switch (toSelect) {
            case 'farenheight':
              this.toValue = (frValue * (9 / 5) - 459.67).toFixed(2);
              break;
            case 'celsius':
              this.toValue = (frValue - 273.15).toFixed(2);
              break;
            case 'kelvin':
              this.toValue = frValue.toFixed(2);
              break;
          }
          break;
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
