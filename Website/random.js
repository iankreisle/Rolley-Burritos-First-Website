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
    var minRange = document.getElementById("minRange").value;
    var maxRange = document.getElementById("maxRange").value;
    var randomNumber;
    if(minRange < maxRange){
        randomNumber = randomChange(minRange, maxRange);
    }
    else if (minRange > maxRange){
        randomNumber = randomChange(maxRange, minRange);
    }
    var randomNumber = randomChange(minRange, maxRange);
    console.log(randomNumber);
    for(let i=0; i<randomNumber; i++){
        const element = document.createElement('div');
        element.innerHTML = '<img src="https://media3.giphy.com/media/lojcDkpTHNU6T1UOCd/giphy_s.gif" width="200" height="200" alt="budgie">';
        document.getElementById("pics").appendChild(element);
    
}}
