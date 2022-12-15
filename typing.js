let myHtml = document.querySelector('html');
myHtml.addEventListener('keyup', (event) => test(event.key) );


const words = ["a","dance","high",	'our',	"spouse",
"able",	"danger",	"hill",	"out",	"spring",
"about",	"dark",	"him",	"outside",	"square",
"above",	"daughter",	"himself",	"over",	"stairs",
"accident",	"day",	"hint",	"own",	"stairway",
]; 

function test(event){
    element = document.getElementById(event+"key");
    element.style.backgroundColor = "red";
    setTimeout(function() {element.style.backgroundColor = "white";}, 25);

}


window.onload = function generateWord(){
   for(let i = 0; i < 15, i++;){
        let loc = Math.floor(Math.random() * words.length-1);
        getElementById("insertWords").innnerText(words[loc])
    }
    
}


