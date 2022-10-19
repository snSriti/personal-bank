
// deposit part
document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    console.log(newDepositAmount);

    depositField.value = '';


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;


    // add total deposit and balance 
    const balanceAmount = document.getElementById('total-balance');
    const getBalanaceAmoutString = balanceAmount.innerText;
    const getBalanaceAmount = parseFloat(getBalanaceAmoutString);

    // add current ammount
    const addCurrentAmount = newDepositAmount + getBalanaceAmount;

    balanceAmount.innerText = addCurrentAmount;

})














