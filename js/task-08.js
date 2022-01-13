const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  const formDataEl = {};

  if (email.value === '' || password.value === '') {
    return alert('Аллё, господин, заполни поля!');
  }

  formDataEl.email = email.value;
  formDataEl.password = password.value;

  console.log(formDataEl);

  return formRef.reset();
}
