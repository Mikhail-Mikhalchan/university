document.addEventListener("DOMContentLoaded", () => {
    var inputs = document.querySelectorAll('#number-inputs input[type="number"]');
    var amountInput = document.querySelector('#number-amount input[disabled]');
    
    for(let input of inputs) {
        input.addEventListener("input", onInputChanged);
    }
    
    function onInputChanged(){
        let amount = 0;
        
        for(let input of inputs) {
            const value = input.value;
            amount += value === null || value === "" ? 0 : parseInt(value);
        }
        
        amountInput.value = amount;
    }
});