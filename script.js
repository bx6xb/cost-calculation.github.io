function countTableValues() {
  td[0].innerHTML = (
    +input.value * +profitPercentage.value +
    +input.value
  ).toFixed(2);
  td[1].innerHTML = (
    (+input.value * +profitPercentage.value + +input.value) /
    (1 - +sellingComm.value) /
    (1 - +withdrawalComm.value)
  ).toFixed(2);
  td[2].innerHTML = (td[0].innerHTML - +input.value).toFixed(2);
  td[3].innerHTML = (+input.value / +exchangeRate.value).toFixed(2);
  td[4].innerHTML = (
    +td[3].innerHTML * +profitPercentage.value +
    +td[3].innerHTML
  ).toFixed(2);
  td[5].innerHTML = (
    (+td[3].innerHTML * +profitPercentage.value + +td[3].innerHTML) /
    (1 - +sellingComm.value) /
    (1 - +withdrawalComm.value)
  ).toFixed(2);
  td[6].innerHTML = (+td[4].innerHTML - +td[3].innerHTML).toFixed(2);
}

var td = document.getElementsByTagName("td");

var input = document.getElementById("table-input");
input.addEventListener("change", function () {
  countTableValues();
});

var profitPercentage = document.getElementById("profit-percentage");
profitPercentage.addEventListener("change", function () {
  countTableValues();
});

var sellingComm = document.getElementById("selling-comm");
sellingComm.addEventListener("change", function () {
  countTableValues();
});

var withdrawalComm = document.getElementById("withdrawal-comm");
withdrawalComm.addEventListener("change", function () {
  countTableValues();
});

var exchangeRate = document.getElementById("exchange-rate");
exchangeRate.addEventListener("change", function () {
  countTableValues();
});
