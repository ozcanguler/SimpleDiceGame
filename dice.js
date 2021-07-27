var firstDice=(Math.random()*6)+1;
firstDice=Math.floor(firstDice);
var secondDice=(Math.random()*6)+1;
secondDice=Math.floor(secondDice);
document.getElementsByTagName("img")[0].setAttribute("src","images/dice_"+firstDice+".png");
document.getElementsByTagName("img")[1].setAttribute("src","images/dice_"+secondDice+".png");
if(firstDice>secondDice)
{
    document.querySelector("h1").innerHTML="<img src='images/success.png'> Player 1 Wins";
}
else if(secondDice>firstDice)
{
    document.querySelector("h1").innerHTML="Player 2 Wins <img src='images/success.png'>";
}
else
{
    document.querySelector("h1").innerHTML="Draw!";
}
