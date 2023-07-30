
var randomNumber1 = Math.floor(Math.random()*6+1)
var randomNumber2 = Math.floor(Math.random()*6+1)

var randomDiceImage1 = "dice" + randomNumber2 + ".png"
var randomDiceImage = "dice" + randomNumber1 + ".png"

var randomImageSource1 = "images/" + randomDiceImage1
var randomImageSource = "images/" + randomDiceImage

document.querySelectorAll("img")[0].setAttribute("src",randomImageSource)
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource1)

if(randomImageSource1>randomImageSource){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else if(randomImageSource1<randomImageSource)
{document.querySelector("h1").innerHTML = "Player 1 Wins!"}
else {
document.querySelector("h1").innerHTML = "Draw!"
}
