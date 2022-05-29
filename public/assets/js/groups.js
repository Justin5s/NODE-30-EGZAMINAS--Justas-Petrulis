const URL = 'http://localhost:3000';
const groupsWrapper = document.querySelector('.groups-wrapper');
const errorsContainerEl = document.querySelector('.errors');

async function getGroups() {
  const token = localStorage.getItem('token24');
  const resp = await fetch(`${URL}/accounts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log('resp ===', resp);
  const jsData = await resp.json();

  console.log('jsData===', jsData);
  if (jsData.success === false) {
    console.log('yra klaidu redirect');
    window.location.replace('login.html');
  }
  renderGroupsEl(jsData.data, groupsWrapper);
}
getGroups();

const formEl = document.forms.group;

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const newGroupObj = {
    group_id: formEl.elements.group.value,
  };
  // console.log('newGroupObj ===', newGroupObj);
  createNewGroup(newGroupObj);
});

function renderGroupsEl(groupsArray, dest) {
  dest.innerHTML = '';
  groupsArray.forEach(({ group_id, name }) => {
    dest.innerHTML += `
        <a href="">
        <div class="group-box">
            <h2 class="group-text">ID: ${group_id}</h2>
            <p>${name}</p>
        </div></a>
        `;
  });
}

async function createNewGroup(newGrpObj) {
  const token = localStorage.getItem('login_token');
  if (token === null) throw new Error('token not found');

  const resp = await fetch(`${URL}/groups`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newGrpObj),
  });
  const dataInJs = await resp.json();
  // console.log('dataInJs ===', dataInJs);
  if (dataInJs.success === true) {
    getGroups();
  } else {
    handleErrors();
  }
}

function handleErrors(erorrArray) {
  errorsContainerEl.innerHTML = '';
  console.log('erorrArray ===', erorrArray);
  erorrArray.details.forEach((err) => {
    errorsContainerEl.innerHTML += `<p>${err.message}</p>`;
  });
}
