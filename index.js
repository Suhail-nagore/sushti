var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomNumberdicee1 = "images/dice" + randomNumber1 + ".png";
var randomNumberdicee2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomNumberdicee1);
document.querySelector(".img2").setAttribute("src", randomNumberdicee2);


if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "Suhail loves more";

} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Srishti loves more";
} else {
    document.querySelector("h1").innerHTML = "we are perfect";
}