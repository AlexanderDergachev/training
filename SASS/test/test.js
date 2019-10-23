// function delay(ms) {
//   return new Promise(re => setTimeout(re, ms), j => alert);
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));

//random color
function generateColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

let divs = document.getElementsByClassName('elem');
let my_divs= document.querySelector('.elem');
for (let div of divs) {
  div.style.border = '5px solid coral';
  div.style.borderRadius = '10px';

}
my_divs.style.borderRadius = '70px';
console.log(my_divs);

// text link

let textq = document.querySelector('#text');
textq.onclick = function() {
  text.outerHTML = '<a href="https://www.youtube.com/?gl=UA">теперь это ссылка</a>'
}

setInterval(() => {
  if (  my_divs.style.visibility == 'hidden') {
    my_divs.style.visibility = 'visible'
  } else {
    my_divs.style.visibility = 'hidden'
  }
}, 500);

//greetings

let greetings = document.createElement('div');
greetings.className = "greetings";
greetings.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
document.querySelector('.container').before(greetings);

let greetings_clone = document.querySelector('.greetings').cloneNode(true);
greetings_clone.innerHTML = 'Это клон';
greetings.after(greetings_clone);

setTimeout(() => greetings.remove() || greetings_clone.remove(), 2000);

//scroll

document.querySelector('.scroll').onclick = function() {
  this.style.background = generateColor();
  window.scrollTo(0, 0);
}

//client window size

let size_button = document.querySelector('.size_button');
let flag = true;

setInterval(() => {

  if(size_button.offsetHeight == 70) {
    flag = true;
  } else if (size_button.offsetHeight == 170) {
    flag = false;
  }
  if( flag == true) {
    size_button.style.height = `${size_button.offsetHeight + 2}px`;
    size_button.style.width = `${size_button.offsetWidth + 2}px`;
  } else if (flag == false) {
    size_button.style.height = `${size_button.offsetHeight - 2}px`;
    size_button.style.width = `${size_button.offsetWidth - 2}px`;
  }
}, 16)

size_button.onclick = function() {
  let clientSize = document.createElement('span');
  clientSize.className = 'client-size';
  let clientWidth = document.documentElement.clientWidth;
  let clientHeight = document.documentElement.clientHeight;
  clientSize.innerHTML = `${clientWidth} X ${clientHeight}`;
  document.querySelector('.size_button__container').after(clientSize);
  console.log(getComputedStyle(clientSize).opacity);

  setInterval(() => {
    clientSize.style.opacity = `${getComputedStyle(clientSize).opacity - 0.01}`;
    if (getComputedStyle(clientSize).opacity == 0) {
      clientSize.remove();
    }
    console.log(getComputedStyle(clientSize).opacity);
    
  }, 30);
}

//secondary bg color 

setInterval(() => {
  let color = generateColor();
  document.querySelector('.secondary').style.background = color;
}, 1000)

//test of my own Event

// let eventTest = document.querySelector('.event-test');
// eventTest.onclick = function() {
//   eventTest.innerHTML += ' was tested';
// }

// eventTest.addEventListener("changeColor", function() {
//   eventTest.style.color = generateColor();
//   alert('hui');
// })  

// let myEvent = new Event('changeColor');
// eventTest.dispatchEvent(myEvent);

let ball = document.querySelector('.circle__blue');
let ball1 = document.querySelector('.circle__red');

ball.onmousedown = function(event) {

  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = 'absolute';
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + 'px';
    ball.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  ball.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    ball.onmouseup = null;
  };

};

ball.ondragstart = function() {
  return false;
};

// ball1.onmousedown = function(event) {

//   let shiftX = event.clientX - ball1.getBoundingClientRect().left;
//   let shiftY = event.clientY - ball1.getBoundingClientRect().top;

//   ball.style.position = 'absolute';
//   ball.style.zIndex = 1000;
//   document.body.append(ball1);

//   moveAt(event.pageX, event.pageY);

//   function moveAt(pageX, pageY) {
//     ball1.style.left = pageX - shiftX + 'px';
//     ball1.style.top = pageY - shiftY + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   document.addEventListener('mousemove', onMouseMove);

//   ball1.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//     ball1.onmouseup = null;
//   };

// };

// ball1.ondragstart = function() {
//   return false;
// };

