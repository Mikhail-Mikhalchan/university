$(document).ready(() => {
    const $button = $("#show-number");
    const $list = $("#list");
    const $listItems = $list.find("li");
    
    $button.bind("click", (event) => {
        
        for(let i = 0; i < $listItems.length; i++) {
            const $listItem = $listItems.get(i);
            
            $listItem.append(` ${i + 1}`);
        }
        
        $button.attr("disabled", true);
    });
});