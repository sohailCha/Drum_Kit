
// storing the length of all the buttons.
let num = document.querySelectorAll(".drum").length;

for (let i = 0 ; i < num; i++){

  // Adding event listener(for mouse clicks) to each and every drum button
  // Using ES5 function to bound the keyword 'this' to the button we clicked.
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
    // this here refers to the current iterated drum object. 
    // It will store the text value of that particular drum into the variable.
    let buttonTextValue = this.innerHTML;

    makeSound(buttonTextValue);

    buttonKey(buttonTextValue);

  });
}

// Adding event listener for keyboard keys
document.addEventListener("keydown",function(e){

  makeSound(e.key);

  buttonKey(e.key);

})

// playing sound based on the key value

function makeSound(key){

  switch (key) {
    case "w" :
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case 'W' :
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
    break;

    case "a" :
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "A" :
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
    break;

    case "s" :
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "S" :
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
    break;

    case "d" :
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    case "D" :
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
    break;

    case "j" :
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "J" :
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "k" :
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "K" :
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "l" :
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
    break;

    case "L" :
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
    break;

    default : console.log(buttonTextValue);
  }
}

// adding .pressed class so that buttons looks like they have been pressed.
function buttonKey(currentKey){
  let activeButton = document.querySelector("." +currentKey);
  activeButton.classList.add('pressed');

  //removing .pressed class after 0.1 secs
  setTimeout(() =>{
    activeButton.classList.remove("pressed");
  }, 100)
}
