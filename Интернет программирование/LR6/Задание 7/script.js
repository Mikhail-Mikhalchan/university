$(document).ready(() => {
    $("#isOpenNewTab").bind("input", (event) => {
        
        const isOpenNewTab = $(event.target).prop("checked");
        
        $(".resource-link").attr("target", isOpenNewTab ? "_blank" : null);
    });
});