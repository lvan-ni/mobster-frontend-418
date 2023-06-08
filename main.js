const mobNames = document.getElementsByClassName('mobNames');
const mobNamesArr = [...mobNames];

const getMobNames = async event => {
  const mobName = event.target.id;
  const mobDisplay = document.querySelector('#mobDisplay');
  const response = await fetch(`http://localhost:4000/mobs/${mobName}/members`)
  const mob = await response.json();
  const mobMembers = mob;
  const name = mobMembers.map(m => m.memberName);
  mobDisplay.innerHTML = name;
};

mobNamesArr.forEach(mobName => mobName.addEventListener('click', getMobNames));
