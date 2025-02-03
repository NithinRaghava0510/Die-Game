var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice"+randomNumber1+".png";

var diceImage1 = "./images/"+randomImage1;

document.querySelectorAll("img")[0].setAttribute("src",diceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice"+randomNumber2+".png";

var diceImage2 = "./images/"+randomImage2;

document.querySelectorAll("img")[1].setAttribute("src",diceImage2);


if (randomNumber1 > randomNumber2)
{
    var newtext = "Player 1 Wins";
}
else if (randomNumber1 < randomNumber2)
{
    var newtext = "Player 2 Wins";
}
else
{
    var newtext = "Draw!";
}

document.querySelector("h1").innerText = newtext;