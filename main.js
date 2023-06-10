const mobNames = document.getElementsByClassName('mobNames');
const mobNamesArr = [...mobNames];

const URL = 'https://mobster-backend-418-production.up.railway.app';
const devURL = 'http://localhost:4000';

const getMobNames = async event => {
  const mobName = event.target.id;
  console.log(mobName);
  const nameCards = document.getElementById('nameCards');
  const response = await fetch(`${devURL}/mobs/${mobName}/members`)
  const mob = await response.json();
  const mobMembers = mob;
  const name = mobMembers.map(m => m.memberName);


  const card1 = document.getElementById('nameCard1');
  const card2 = document.getElementById('nameCard2');
  const card3 = document.getElementById('nameCard3');
  const card4 = document.getElementById('nameCard4');

  
  card1.innerText = name[0];
  card2.innerText = name[1];
  card3.innerText = name[2];
  card4.innerText = name[3];

};

mobNamesArr.forEach(mobName => mobName.addEventListener('click', getMobNames));


