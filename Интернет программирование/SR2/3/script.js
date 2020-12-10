$(document).ready(()=>{
    
    var bigImage = document.querySelector(".bid-img img");
    
    $(".gallery img").bind("click", onImageClick);
    
    function onImageClick(event) {
        const image = event.target;
        
        bigImage.src = image.src === bigImage.src ? "" : image.src;
    }
});