var initaialPrice = document.querySelector("#initial-price");
var quantity = document.querySelector("#quantity");
var marketPrice = document.querySelector("#market-price");
var tellMe = document.querySelector("#tellme-btn");
var output = document.querySelector("#output");

function calculateProfitOrLoss(){
    var initial = Number(initaialPrice.value);
    var quant = Number(quantity.value);
    var current = Number(marketPrice.value)
    if (initial > current){
        var loss = (initial - current) * quant;
        var lossPercent = (loss/initial) * 100;
        output.innerText ="Hey You Have a Loss of " + loss + " and loss percentage is " + lossPercent + "% -:)";
    }else if (current > initial){
        var profit = (current-initial) * quant;
        var profitPercent = (profit/initial) * 100;
        output.innerText = "Hey You Have Profit of " + profit + " and profit percentage is " + profitPercent + "% -:)";


    }else {
        
        output.innerText = "No Pain, No Gain.....You don't have any Loss or Proffit";
    }
}


tellMe.addEventListener("click", calculateProfitOrLoss);