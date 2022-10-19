
// withdraw part
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const getWithdrawFiled = parseFloat(withdrawFieldString);

 // clear field
 withdrawField.value = '';

 
    // withdraw amount
    const withdrawValue = document.getElementById('withdraw-value');
    const withdrawValueString = withdrawValue.innerText;
    const getWithdrawValue = parseFloat(withdrawValueString);

    const totalWithdraw = getWithdrawValue + getWithdrawFiled;

    withdrawValue.innerText = totalWithdraw;

//after withdraw then balance get
 const afterWithdraw = withdrawValue - totalWithdraw;
 withdrawValue.innerText = afterWithdraw;




    
  


   
})