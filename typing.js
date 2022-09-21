let myHtml = document.querySelector('html');
myHtml.addEventListener('keyup', (event) => test(event.key) );


function test(event){
    element = document.getElementById(event+"key");
    element.style.backgroundColor = "red";
    setTimeout(function() {element.style.backgroundColor = "white";}, 50);

}