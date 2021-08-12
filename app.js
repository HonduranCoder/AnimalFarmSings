// import functions and grab DOM elements
const h1El = document.getElementById('animal-name');
const horseEl = document.getElementById('horse-image');
const dogEl = document.getElementById('dog-image');
const catEl = document.getElementById('cat-image');
const horseSound = document.getElementById('horse-sound');
const dogSound = document.getElementById('dog-sound');
const catSound = document.getElementById('cat-sound');

// initialize state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  horseEl.addEventListener('click', () => {
    document.getElementById("header").innerHTML ="Horse!"
});

dogEl.addEventListener('click', () => {
  document.getElementById("header").innerHTML ="Dog!"
});

catEl.addEventListener('click', () => {
  document.getElementById("header").innerHTML ="Cat!"
});

horseEl.addEventListener('click', () => {
  horseSound.play();
});

dogEl.addEventListener('click', () => {
  dogSound.play();
});

catEl.addEventListener('click', () => {
  catSound.play();
});

/*document.addEventListener('keydown', (e) =>{
  let key = event.key; 
  let code = event.code; 
  alert (`Key pressed ${key} /n key code value: ${code}`; 
}, false);
*/

/*document.addEventListener('keydown', function (event) {
  if (event.key === 'd') {
    document.body.style = "color: white; background-color: #111111";
  }
  if (event.key === 'l') {
    document.body.style = '';
  }
});*/