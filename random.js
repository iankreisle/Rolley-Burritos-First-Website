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