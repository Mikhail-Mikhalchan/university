$(document).ready(()=>{
    
    $("button#update-styles").bind("click", () => {
        $("div > p").css("color", "green");
        
        const $paragraphs = $("p.paragraph");
        $paragraphs.css("color", "red");
        $paragraphs.css("font-size", "30px");
    });
});