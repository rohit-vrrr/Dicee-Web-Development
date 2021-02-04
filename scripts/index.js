var randomNumber1 = Math.floor(Math.random() * 6)+1;      //1-6 random
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var images1 = "images/dice" + randomNumber1 + ".png";     //dice1-6
var images2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", images1);       //img1
document.querySelector(".dice .img2").setAttribute("src", images2);       //img2

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML="Draw!";
}
else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="<img class='flag' src='images/flag.png' alt='flag-img'> Player 1 Wins!";
}
else {
  document.querySelector("h1").innerHTML="Player 2 Wins! <img class='flag' src='images/flag.png' alt='flag-img'>";
}
