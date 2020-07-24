var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var h1 = document.querySelector('h1');

var img1 = document.querySelector('.img1');
var img2 = document.querySelector('.img2');

var imgSrc1 = `images/dice${randomNumber1}.png`;
var imgSrc2 = `images/dice${randomNumber2}.png`;

img1.setAttribute('src', imgSrc1);
img2.setAttribute('src', imgSrc2);

if (randomNumber1 === randomNumber2) {
  h1.innerHTML = 'Draw';
} else if (randomNumber1 > randomNumber2) {
  h1.innerHTML = '🚩Player 1 Wins!';
} else {
  h1.innerHTML = 'Player 2 Wins!🚩 ';
}
