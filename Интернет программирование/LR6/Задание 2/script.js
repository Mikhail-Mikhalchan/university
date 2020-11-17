$(document).ready(() => {
    var $paragraph = $("#paragraph");
    var $fadeIn = $("#fade-in");
    var $fadeOut = $("#fade-out");
    var isVisible = true; 
        
    toggleButtonDisabled();
    
    $fadeIn.bind("click", onButtonClick);
    $fadeOut.bind("click", onButtonClick);
    
    function onButtonClick() {
        if(isVisible) {
           $paragraph.fadeOut();
            isVisible = false;
        }
        else {
           $paragraph.fadeIn();
            isVisible = true;
        }
        
        toggleButtonDisabled();
    }
    
    function toggleButtonDisabled() {
        $fadeIn.attr("disabled", isVisible);
        $fadeOut.attr("disabled", !isVisible);
    }
});