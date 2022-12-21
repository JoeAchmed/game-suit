function generateSuit(params) {
  let img = document.getElementById('user');
  generateRandomComputer(params);
  switch (params) {
    case 'cutter':
      img.setAttribute('src', 'img/cutter-suit.png');
      img.setAttribute('alt', 'cutter');
      img.setAttribute('width', '200');
    break;
    case 'rock':
      img.setAttribute('src', 'img/rock-suit.png');
      img.setAttribute('alt', 'rock');
      img.setAttribute('width', '200');
    break;
    default:
      img.setAttribute('src', 'img/paper-suit.png');
      img.setAttribute('alt', 'paper');
      img.setAttribute('width', '200');
    break;
  }
}

function generateRandomComputer(user) {
  let img = document.getElementById('computer');
  const arrImages = ['cutter', 'rock', 'paper'];
  const pickImage = arrImages[Math.floor(Math.random()*arrImages.length)];

  img.setAttribute('src', `img/${pickImage}-suit.png`);
  img.setAttribute('alt', pickImage);
  img.setAttribute('width', '200');

  // define result
  generateResult(user, pickImage);
}

function generateResult(user, computer) {
  let result = document.getElementById('result');
  
  if (user === computer) {
    result.classList.add('draw');
    result.classList.remove('win');
    result.classList.remove('lose');

    result.innerHTML = "Draw";
  }
  else if((user === 'cutter' && computer === 'paper') || (user === 'paper' && computer === 'rock') || (user === 'rock' && computer === 'cutter')) {
    result.classList.add('win');
    result.classList.remove('draw');
    result.classList.remove('lose');

    result.innerHTML = "Menang";
  }
  else {
    result.classList.add('lose');
    result.classList.remove('win');
    result.classList.remove('draw');

    result.innerHTML = "Kalah";
  }
}