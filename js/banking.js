// handle deposti button
document.getElementById('deposit-button').addEventListener('click', function(){
    // get the amount deposited
       const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    //console.log(depositInput).value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    //console.log(newDepositAmount);
    // update deposit Total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update Account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    depositInput.value = '';
});
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdarwInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdarwInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // Set withdraw Total
    const withdrawTotal = document.getElementById('withdraw-total');
    // console.log(withdrawTotal);
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // Update Balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdarwInput.value = '';
})