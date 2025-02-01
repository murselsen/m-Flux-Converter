// tempurature-form
const tempuratureForm = {
    
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
