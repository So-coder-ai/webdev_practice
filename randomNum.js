
const mybutton = document.getElementById("numroll");
const mylabel1 = document.getElementById("mylabel1");
const mylabel2 = document.getElementById("mylabel2");
const mylabel3 = document.getElementById("mylabel3");
let max = 6;
let min = 1;
let random1;
let random2;
let random3;
mybutton.onclick = function()
{
    random1 = Math.floor(Math.random()*max)+min;   
    random2 = Math.floor(Math.random()*max)+min;   
    random3 = Math.floor(Math.random()*max)+min;
    mylabel1.textContent = random1;
    mylabel2.textContent = random2;
    mylabel3.textContent = random3;
}