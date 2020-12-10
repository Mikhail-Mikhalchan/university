$(document).ready(()=>{
    
    var $images = $(".gallery img");
    $images.bind("click", onImageClick);
    
    function onImageClick(event) {
        const image = event.target;
        const $image = $(image);
        
        const height = image.getBoundingClientRect().height;
        
        $images.css("height", "30px");
        $image.css("height", height == 30 ? "300px" : "30px");
    }
});