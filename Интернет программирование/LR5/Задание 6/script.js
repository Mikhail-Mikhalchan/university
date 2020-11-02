document.addEventListener("DOMContentLoaded", () => {
    var textArea = document.getElementById("text-area");
    
    textArea.addEventListener("change", () => {
        const value = textArea.value;
        const newValue = value[0].toUpperCase() + value.slice(1);
        
        alert(newValue);
    });
});