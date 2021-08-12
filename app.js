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
function playSoundAndChange(sound, animalName){
  sound.play(); 
  document.getElementById("header").innerHTML = animalName;
}

horseEl.addEventListener('click', () => {
    playSoundAndChange(horseSound, 'horse')
});

dogEl.addEventListener('click', () => {
  playSoundAndChange(dogSound, 'dog')
});

catEl.addEventListener('click', () => {
  playSoundAndChange(catSound, 'cat')
});

/*setTimeout(()=>{
  document.getElementById("header").innerHTML = "Animal Farm";
}, 2000)
*/

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