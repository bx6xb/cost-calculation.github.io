var currency = document.getElementById("currency");
var purchase = document.getElementById("purchase");
var spwc = document.getElementById("sale-price-without-commission");
var sp = document.getElementById("sale-price");
var profit = document.getElementById("profit");
var profitPercentage = document.getElementById("profit-percentage");
var salesCommission = document.getElementById("sales-commission");
var withdrawalFee = document.getElementById("withdrawal-fee");

function recountNumbers() {
  spwc.innerHTML = (
    +purchase.value +
    +purchase.value * +profitPercentage.value
  ).toFixed(2);
  sp.innerHTML = (
    (+purchase.value * +profitPercentage.value + +purchase.value) /
    (1 - +salesCommission.value) /
    (1 - +withdrawalFee.value)
  ).toFixed(2);
  profit.innerHTML = (+spwc.innerHTML - +purchase.value).toFixed(2);
}

currency.addEventListener("change", function () {
  recountNumbers();
});

purchase.addEventListener("input", function () {
  recountNumbers();
});

profitPercentage.addEventListener("input", function () {
  recountNumbers();
});

salesCommission.addEventListener("input", function () {
  recountNumbers();
});

withdrawalFee.addEventListener("input", function () {
  recountNumbers();
});
