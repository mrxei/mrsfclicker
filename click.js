let mrsf = document.getElementById("mrsf")
let sfDollarCounter = document.getElementById("sf-dollars")
let sfDollars = 0
let multiplier = 1
function mrsfClick() {
    sfDollars += multiplier
    sfDollarCounter.innerText = sfDollars
}
mrsf.addEventListener("click", mrsfClick)
