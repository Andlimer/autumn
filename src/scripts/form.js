const contactForm = document.querySelector('.form'),
  sendButton = document.querySelector('.form__button');

sendButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (validateForm(contactForm)) {
    let formData = new FormData(contactForm);
    formData.append("phone", "8(994)015-11-05");
    formData.append("to", "Andlimer@gmail.com");

    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(formData);
    xhr.addEventListener('load', () => {
      if (xhr.response.status === 200 || xhr.response.status === 1) {
        console.log('send');
      }
    });
  }
});

const validateForm = (form) => {
  let valid = true;
  const inputs = form.querySelectorAll('.form__input');

  inputs.forEach(input => {
    if (!validateField(input)) {
      valid = false;
    } 
  });

  return valid;
};

const validateField = (input) => {
  let validity = input.checkValidity();

  if (validity) {
    input.parentElement.classList.remove('form__field_error');
    input.nextElementSibling.textContent = '';
    input.nextElementSibling.style = 'display: none;';
  } else {
    input.parentElement.classList.add('form__field_error');
    input.nextElementSibling.textContent = input.validationMessage;
    input.nextElementSibling.style = 'display: block;';
  }

  return validity;
};
