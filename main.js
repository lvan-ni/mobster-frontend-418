const mobNames = document.getElementsByClassName('mobNames');
const mobNamesArr = [...mobNames];

const URL = 'https://mobster-backend-418-production.up.railway.app';
const devURL = 'http://localhost:4000';

const getMobNames = async event => {
  const mobName = event.target.id;
  const mobDisplay = document.querySelector('#mobDisplay');
  const response = await fetch(`${URL}/mobs/${mobName}/members`)
  const mob = await response.json();
  const mobMembers = mob;
  const name = mobMembers.map(m => m.memberName);
  mobDisplay.innerHTML = name;
};

mobNamesArr.forEach(mobName => mobName.addEventListener('click', getMobNames));
