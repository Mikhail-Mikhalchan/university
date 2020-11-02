document.addEventListener("DOMContentLoaded", () => {
    var cells = document.querySelectorAll("#table td");
    var startButton = document.getElementById("start");
    var resetButton = document.getElementById("reset");
    var amountDisplay = document.getElementById("amount-display");
    
    const paragraphCaption = "Количество активных ячеек:";
    const activeCssClass = "active";
    
    for(let cell of cells) {
        cell.addEventListener("click", toggleActiveCssClass);
    }
    
    startButton.addEventListener("click", start);
    resetButton.addEventListener("click", reset);
    
    function toggleActiveCssClass() {
        this.classList.toggle(activeCssClass);
    }
    
    function start() {
        startButton.disabled = true;
        
        let amount = 0;
        for(let cell of cells) {
            if(cell.classList.contains(activeCssClass)) amount++;
        }
        
        amountDisplay.innerHTML = `${paragraphCaption} ${amount}`;
        
        startButton.disabled = false;
    }
    
    function reset() {
        startButton.disabled = true;
        resetButton.disabled = true;
        
        for(let cell of cells) {
            cell.classList.remove(activeCssClass);
        }
        
        amountDisplay.innerHTML = null;
        
        startButton.disabled = false;
        resetButton.disabled = false;
    }
});