document.addEventListener("DOMContentLoaded", () => {
    var input1 = document.getElementById("input-1");
    var input2 = document.getElementById("input-2");
    var amountInput = document.getElementById("input-amount");
    var calculate = document.getElementById("calculate");
    
    input1.addEventListener("input", onInput1Click)
    input2.addEventListener("input", onInput1Click)
    calculate.addEventListener("click", calculateAmount)
    
    function onInput1Click(){
        amountInput.value = null;
        
        let value1 = parseInt(input1.value);
        let value2 = parseInt(input2.value);
        
        if(value1 < value2) return;
        
        value1++;
        input2.value = value1;
        input2.min = value1;
    }
    
    function calculateAmount() {
        let startNumber = parseInt(input1.value);
        let finishNumber = parseInt(input2.value);
        let amount = startNumber;
        
        for(let currentNumber = startNumber + 1; currentNumber <= finishNumber; currentNumber++) {
            amount += currentNumber;
        }
        
        amountInput.value = amount;
    }
});