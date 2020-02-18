// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/Firefox_Logo,_2017.svg') {
    myImage.setAttribute ('src','images/firefox2.svg');
  } else {
    myImage.setAttribute ('src','images/Firefox_Logo,_2017.svg');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('あなたの名前を入力してください。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla　は素晴らしいよ、' + myNanme;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla　はすばらしいよ、' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
