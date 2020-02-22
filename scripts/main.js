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

function showh1() {
  let Name = localStorage.getItem('name');
  if (Name === null || Name.length === 0 ) {
    myHeading.innerHTML = 'Mozilla is cool.';
  } else {
    myHeading.innerHTML = 'Mozilla is cool, ' + Name;
  }
}
// setUserNameの内容
function getUserName() {
  let myName;
  myName = prompt('あなたの名前を入力してください。');
  if(myName != null) {
    localStorage.setItem('name', myName);
    showh1();
  }
}
console.log(localStorage);
// ページ読み込み時にユーザーネームがセットされているか確認
if(!localStorage.getItem('name')) {
  getUserName();
} else {
  let storedName = localStorage.getItem('name');
  showh1();
}

// setUserNameを起動
myButton.onclick = function() {
  getUserName();
}
