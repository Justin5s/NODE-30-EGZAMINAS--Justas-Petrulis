const URL = 'http://localhost:3000';
const formEl = document.forms.login;
const errorsContainerEl = document.querySelector('.errors');

// sustabdyti formos nustatytahi siuntima ir perkrovima
formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const loginUserData = {
    email: formEl.elements.email.value,
    password: formEl.elements.password.value,
  };
  // validation
  // TODO:
  loginUser(loginUserData);
});

async function loginUser(loginUserData) {
  console.log('registerUser ===', loginUserData);
  const resp = await fetch(`${URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginUserData),
  });
  const dataInJs = await resp.json();
  console.log('dataInJs ===', dataInJs);
  if (dataInJs.success === false) {
    handleErrors(dataInJs.error);
  }
  if (dataInJs.success === true) {
    console.log('success');
    localStorage.setItem('token24', dataInJs.data);
    window.location.replace('groups.html');
  }
}

function handleErrors(erorrArray) {
  errorsContainerEl.innerHTML = '';
  console.log('erorrArray ===', erorrArray);
  erorrArray.forEach((err) => {
    errorsContainerEl.innerHTML += `<p>${err.message}</p>`;
  });
}
