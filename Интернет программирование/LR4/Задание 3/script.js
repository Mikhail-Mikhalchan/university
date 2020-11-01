document.addEventListener("DOMContentLoaded", () => {
    var input = document.getElementById("count-rabbits-input");
    var button = document.getElementById("count-rabbits-button");
    var clickCount = 0;
    
    button.addEventListener("click", () => {
        button.disabled = true;
        
        clickCount++;
        
        for(let i = 1; i <= parseInt(input.value); i++) {
            alert(`Кролик номер #${clickCount}`);
        }
        
        button.disabled = false;
    });
});