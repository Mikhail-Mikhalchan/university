$(document).ready(() => {
    const fullVersionCaption = "Полная версия";
    const fullVersionCssClass = "full-version";
    const visuallyImpairedVersionCaption = "Версия для слабовидящих";
    const visuallyImpairedVersionCssClass = "visually-impaired-version";
    
    $("#change-version").bind("click", onChangeClick);
    
    function onChangeClick(event) {
        const $button = $(event.target);
        const $page = $("#page");
        
        if($page.hasClass(fullVersionCssClass)) {
           $page.removeClass(fullVersionCssClass);
           $page.addClass(visuallyImpairedVersionCssClass);
            
            $button.text(fullVersionCaption)
        }
        else if($page.hasClass(visuallyImpairedVersionCssClass)) {
           $page.removeClass(visuallyImpairedVersionCssClass);
           $page.addClass(fullVersionCssClass);
            
            $button.text(visuallyImpairedVersionCaption)
        }
    }
});