document.addEventListener("DOMContentLoaded", () => {
    const strings = ["один", "два", "три"];
    var paragraph = document.getElementById("paragraph");
    var button = document.getElementById("changeParagraph");
    var currentIndex = 0;
    
    button.addEventListener("click", changeParagraph);
    
    function changeParagraph() {
        paragraph.innerHTML = strings[currentIndex];
        currentIndex = ++currentIndex === strings.length ? 0 : currentIndex;
    }
});