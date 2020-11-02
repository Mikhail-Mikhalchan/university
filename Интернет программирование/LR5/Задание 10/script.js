document.addEventListener("DOMContentLoaded", () => {
    const colors = ["red", "green", "blue"];
    var paragraph = document.getElementById("paragraph");
    var currentIndex = 0;
    
    setInterval(() => changeColor(), 1000);
    
    function changeColor() {
        paragraph.style.color = colors[currentIndex];
        currentIndex = ++currentIndex === colors.length ? 0 : currentIndex;
    }
});