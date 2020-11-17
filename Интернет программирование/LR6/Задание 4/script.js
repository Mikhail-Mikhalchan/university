$(document).ready(() => {
    
    const square = document.getElementById("square");
    const $square = $(square);
    
    const container = document.getElementById("container");
    
    const marginStep = 100;
    let marginSign = +1;
    const squareWidth = square.getBoundingClientRect().width;
    
    $square.bind("click", () => {
        
        $square.animate({
            marginLeft: `+=${calculateMargin()}`
          }, 500);
    });
    
    function calculateMargin() {
        const containerWidth = container.getBoundingClientRect().width;
        const marginLeft = parseInt($square.css("margin-left").replace("px", ""));
        
        const futurePlaceOccupied = marginLeft + squareWidth + (marginStep * marginSign);
        
        if(containerWidth === (marginLeft + squareWidth)) {
           marginSign = -1;
        }
        else if(marginLeft === 0) {
           marginSign = +1;
        }
        
        let currentMarginStep = 0;
        
        if(marginLeft > 0 && marginLeft < marginStep) {
           currentMarginStep = marginLeft;
        }
        else if(containerWidth >= futurePlaceOccupied) {
           currentMarginStep = marginStep;
        }
        else if(containerWidth < futurePlaceOccupied) {
           currentMarginStep = containerWidth - (marginLeft + squareWidth);
        }
        
        return currentMarginStep * marginSign;
    }
});