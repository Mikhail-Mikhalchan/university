document.addEventListener("DOMContentLoaded", () => {
    var uncopyableText = document.getElementById("uncopyable-text");
    
    uncopyableText.addEventListener("copy", (event) => {
        event.preventDefault()
        
        alert(`Копирование текста запрещено!`);
    });
});