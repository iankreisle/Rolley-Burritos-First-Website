function theChange(){
    document.getElementById("htmlChange").innerHTML = "Haha this is a change!";
}
function cssChange(){
    document.getElementById("cssButton").style.backgroundColor = "steelblue";
}
function submitChange(){
    var userInput = document.getElementById("myText").value;
    document.getElementById("submission").innerHTML = userInput
}
function randomChange(min, max){
    return Math.floor(Math.random() * (max-min)) + min;
}
function randomCreate(){
var randomNumber = randomChange(0,35);
console.log(randomNumber);
}