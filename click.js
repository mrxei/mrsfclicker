let mrsf = document.getElementById("mrsf")
let sfDollarCounter = document.getElementById("sf-dollars")
let sfDollars = 0
let multiplier = 1
function mrsfClick() {
    sfDollars += multiplier
    sfDollarCounter.innerText = sfDollars
    console.log(sfDollars)
    mrsf.width =
    setTimeout()
}
mrsf.addEventListener("click", mrsfClick)