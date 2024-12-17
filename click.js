let mrsf = document.getElementById("mrsf")
let sfDollarCounter = document.getElementById("sf-dollars")
let dpsCounter = document.getElementById("sfdollars-per-sec")
let glassesCounter = document.getElementById("glasses-owned")
let mustacheCounter = document.getElementById("mustaches-owned")
let computerCounter = document.getElementById("computers-owned")
let glassesClickable = document.getElementById("glasses-upgrade")
let mustacheClickable = document.getElementById("mustache-upgrade")
let computerClickable = document.getElementById("computer-upgrade")
let sfDollars = 0
let glasses = 0
let mustaches = 0
let computers = 0
let SFDPS = 0
function mrsfClick() {
    sfDollars += 1
    sfDollarCounter.innerText = sfDollars
}
function glassesUpgrade() {
    if (sfDollars >= 20) {
        sfDollars -= 20
        sfDollarCounter.innerText = sfDollars
        SFDPS += 1
        glasses += 1
        glassesCounter.innerText = "Owned: " + glasses
        dpsCounter.innerText = "times! (" + SFDPS + " SF Dollars per second)"
    }
}
function mustacheUpgrade() {
    if (sfDollars >= 500) {
        sfDollars -= 500
        sfDollarCounter.innerText = sfDollars
        SFDPS += 20
        mustaches += 1
        mustacheCounter.innerText = "Owned: " + mustaches
        dpsCounter.innerText = "times! (" + SFDPS + " SF Dollars per second)"
    }
}
function computerUpgrade() {
    if (sfDollars >= 5000) {
        sfDollars -= 5000
        sfDollarCounter.innerText = sfDollars
        SFDPS += 250
        computers += 1
        computerCounter.innerText = "Owned: " + computers
        dpsCounter.innerText = "times! (" + SFDPS + " SF Dollars per second)"
    }
}
function giveSFDollars() {
    sfDollars += SFDPS
    sfDollarCounter.innerText = sfDollars
}
mrsf.addEventListener("click", mrsfClick)
glassesClickable.addEventListener("click", glassesUpgrade)
mustacheClickable.addEventListener("click", mustacheUpgrade)
computerClickable.addEventListener("click", computerUpgrade)
window.setInterval(giveSFDollars, 1000)