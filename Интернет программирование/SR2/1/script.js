$(document).ready(()=>{
    var $paragraph = $("#paragraph");
    
    $("#strikethrough-text").bind("input", toggleStrikethroughCssClass);
    $("#bold-text").bind("input", toggleBoldCssClass);
    $("#red-text").bind("input", toggleRedCssClass);
    
    
    function toggleStrikethroughCssClass(event) {
        const input = event.target;
        
        if(input.checked && !$paragraph.hasClass("strikethrough-text")) {
            $paragraph.addClass("strikethrough-text");
        }
        else if (!input.checked) {
            $paragraph.removeClass("strikethrough-text")
        }
    }
    function toggleBoldCssClass(event) {
        const input = event.target;
        
        if(input.checked && !$paragraph.hasClass("bold-text")) {
            $paragraph.addClass("bold-text");
        }
        else if (!input.checked) {
            $paragraph.removeClass("bold-text")
        }
    }
    function toggleRedCssClass(event) {
        const input = event.target;
        
        if(input.checked && !$paragraph.hasClass("red-text")) {
            $paragraph.addClass("red-text");
        }
        else if (!input.checked) {
            $paragraph.removeClass("red-text")
        }
    }
});