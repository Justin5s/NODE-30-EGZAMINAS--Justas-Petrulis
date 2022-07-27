const URL = 'http://localhost:3000';
const formEl = document.forms.register;
const errorsContainerEl = document.querySelector('.errors');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const { full_name, email, password, repeatPassword } = formEl;
  console.log('formEl ===', formEl);
  if (password.value !== repeatPassword.value) return;
  const registerUserData = {
    full_name: formEl.elements.full_name.value,
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
  };

  registerUser(registerUserData, errorsContainerEl);
});

async function registerUser(registerUserData) {
  console.log('trying to register with  ===', registerUserData);
  const resp = await fetch(`${URL}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerUserData),
  });
  const respInJs = await resp.json();
  console.log('respInJs ===', respInJs);
  if (respInJs.success === false) {
    handleErrors(respInJs.error);
    return false;
  }
  if (respInJs.success === true) {
    window.location.replace(`login.html?email=${registerUserData.email}`);
  }
}

function handleErrors(errorArray) {
  errorsContainerEl.innerHTML = '';
  console.log('errorArray ===', errorArray);
  errorArray.forEach((err) => {
    errorsContainerEl.innerHTML += `<p>${err.message}</p>`;
  });
}
