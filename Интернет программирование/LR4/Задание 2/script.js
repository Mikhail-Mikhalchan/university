document.addEventListener("DOMContentLoaded", () => {
    var button = document.getElementById("count-rabbits");
    var clickCount = 0;
    
    button.addEventListener("click", ()=>{
        button.disabled = true;
        
        clickCount++;
        
        for(let i = 1; i <= 3; i++) {
            alert(`Кролик номер #${clickCount}`);
        }
        
        button.disabled = false;
    });
});