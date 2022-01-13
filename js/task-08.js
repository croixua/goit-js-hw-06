const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Аллё, господин, заполни поля!');
  }

  const formDataEl = {
    email: email.value.trim(),
    password: password.value.trim(),
  };

  console.log(formDataEl);

  event.currentTarget.reset();
}
