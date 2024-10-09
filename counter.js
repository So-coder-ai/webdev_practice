const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const counterlabel = document.getElementById("counterlabel");
let count = 0;
decrease.onclick = function()
{
    count--;
    counterlabel.textContent = count;
}
increase.onclick = function()
{
    count++;
    counterlabel.textContent = count;
}
reset.onclick = function()
{
    count = 0;
    counterlabel.textContent = count;
}
