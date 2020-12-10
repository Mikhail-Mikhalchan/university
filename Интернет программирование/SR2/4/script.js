$(document).ready(()=>{
    var paragraph = document.getElementById("paragraph");
    
    var languages = [];
    
    $("#html").bind("input", (event) => toggleLanguage(event, "html"));
    $("#css").bind("input", (event) => toggleLanguage(event, "css"));
    $("#js").bind("input", (event) => toggleLanguage(event, "js"));
    $("#php").bind("input", (event) => toggleLanguage(event, "php"));
    
    function toggleLanguage(event, language) {
        var input = event.target;
        
        const index = languages.indexOf(language);
        
        if(input.checked && index === -1) {
           languages.push(language);
        }
        else if(!input.checked && index != -1) {
            languages.splice(index, 1);
        }
        
        paragraph.innerHTML = languages.length > 0 
            ? `Выбранные языки: ${languages.toString()}`
            : "Ни один язык не выбран";
    }
});