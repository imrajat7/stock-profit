const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

submitBtn.addEventListener("click", submitHandler);

function resetHandler() {
    initialPrice.innerHTML = "";
    stocksQuantity.innerHTML = "";
    currentPrice.innerHTML = "";
}

function submitHandler() {
    const ip = Number(initialPrice.value);
    const qty = Number(stocksQuantity.value);
    const curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        //loss logic
        const loss = (initial - current) * quantity;
        const lossPercentage = (loss / initial) * 100;
        showResult(
            `Your loss is ${loss.toFixed(
                2
            )} and the percent is ${lossPercentage.toFixed(2)}`
        );
    } else if (current > initial) {
        //profit logic
        const profit = (current - initial) * quantity;
        const profitPercentage = (profit / (initial * quantity)) * 100;
        showResult(
            `Your profit is ${profit.toFixed(
                2
            )} and the percent is ${profitPercentage.toFixed(2)}`
        );
    } else {
        showResult(`Nothing to loose, nothing to gain bruh!`);
    }
}

function showResult(msg) {
    outputBox.innerHTML = msg;
}
