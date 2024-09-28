var randomNumber1 =Math.floor(Math.random()*6)+1;
var randomImageI="./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomImageI);

var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomImage2="./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomImage2);
 

if(randomNumber1 ===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
else if(randomNumber1> randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins"
}
else{
    document.querySelector("h1").innerHTML="Player2 Wins"
}