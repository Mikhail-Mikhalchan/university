document.addEventListener("DOMContentLoaded", () => {
    var page = document.getElementById("page");
    var button = document.getElementById("change-theme-button");
    
    const darkThemeCaption = "Поставить темную тему";
    const lightThemeCaption = "Поставить светлую тему";
    const darkThemeCssClass = "dark-theme";
    const lightThemeCssClass = "light-theme";
    
    button.addEventListener("click", () => {
        if (page.classList.contains(darkThemeCssClass)) {
           page.classList.remove(darkThemeCssClass)
           page.classList.add(lightThemeCssClass)
            
            button.innerHTML = darkThemeCaption;
        }
        else {
            page.classList.remove(lightThemeCssClass)
            page.classList.add(darkThemeCssClass)
            
            button.innerHTML = lightThemeCaption
        }
    });
});