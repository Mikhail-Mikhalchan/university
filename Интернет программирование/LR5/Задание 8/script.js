document.addEventListener("DOMContentLoaded", () => {
    var input = document.getElementById("input");
    var plus = document.getElementById("plus");
    var minus = document.getElementById("minus");
    
    plus.addEventListener("click", () => onButtonClick(+1))
    minus.addEventListener("click", () => onButtonClick(-1))
    
    function onButtonClick(sign){
        input.value = parseInt(input.value) + (sign * 1);
        minus.disabled = parseInt(input.value) === 0;
    }
});