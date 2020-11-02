document.addEventListener("DOMContentLoaded", () => {
    var countrySelect = document.getElementById("countrySelect");
    var citySelect = document.getElementById("citySelect");
    var selectDisplay = document.getElementById("selectDisplay");
    
    countrySelect.addEventListener("input", onCountrySelectChanged);
    citySelect.addEventListener("input", onCitySelectChanged);
    
    var countryDictionary = getCountryDictionary();
    
    fillCountrySelect();
    
    var currentCountry = "";
    var currentCity = "";
    
    function getCountryDictionary() {
        let dictionary = new Map();
        dictionary.set("Россия", ["Нижний Новгород", "Краснодар"]);
        dictionary.set("Германия", ["Мюнхен", "Лейпциг"]);
        dictionary.set("США", ["Портленд", "Чикаго"]);
        
        return dictionary;
    }
    
    function fillCountrySelect() {
        for (let country of countryDictionary.keys()) {
            countrySelect.innerHTML += `<option value="${country}">${country}</option>`
        }
    }
    
    function fillCitySelect() {
        let cities = countryDictionary.get(currentCountry);
        
        if(cities === undefined) return;
        
        for (let city of cities) {
            citySelect.innerHTML += `<option value="${city}">${city}</option>`
        }
    }
    
    function clearCitySelect() {
        let options = citySelect.querySelectorAll(`option`);
        for (let option of options) {
            if(option.value === "") continue;
            option.remove();
        }
        
        currentCity = null;
    }
    
    function onCountrySelectChanged() {
        
        if(currentCountry !== countrySelect.value) clearCitySelect();
        
        currentCountry = countrySelect.value;
        
        fillCitySelect();
        displayCountryAndCity();
    }
    
    function onCitySelectChanged() {
        currentCity = citySelect.value;
        
        displayCountryAndCity();
    }
    
    function displayCountryAndCity() {
        selectDisplay.innerHTML = (currentCountry !== null && currentCountry !== undefined && currentCountry !== "")
            ? `<strong>Страна:</strong> ${currentCountry}`
            : "";
        
        selectDisplay.innerHTML += (currentCity !== null && currentCity !== undefined && currentCity !== "") 
            ? `<strong style="margin-left: 10px;">Город:</strong> ${currentCity}` 
            : "";
    }
});