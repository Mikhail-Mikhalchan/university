document.addEventListener("DOMContentLoaded", async () => {
    
    var citiesSelect = document.getElementById("cities");
    
    var countriesSelect = document.getElementById("countries");
    countriesSelect.addEventListener("input", onCountriesSelectChanged);
    
    fillCountriesSelect();

    async function onCountriesSelectChanged() {
        await fillCitiesSelect(this.value.length > 0 ? this.value : null);
    }

    async function fillCountriesSelect() {
        const result = await getCountries();
        if(result === null || !result.success) {
            alert("При запросе к серверу произошла ошибка" + (result !== null ? `: ${result.error}` : ""));
            return;
        }
        
        result.items.forEach(country => {
            const option = document.createElement("option");
            option.textContent = country.name;
            option.value = country.id;
            
            countriesSelect.append(option);
        });
    }
    
    async function fillCitiesSelect(countryId) {
        
        Array.from(citiesSelect.children).forEach(option => {
            if(option.value.length > 0) {
                option.remove();
            }
        });
        
        if(countryId === null) {
            return;
        }
        
        const result = await getCities(countryId);
        if(result === null || !result.success) {
            alert("При запросе к серверу произошла ошибка" + (result !== null ? `: ${result.error}` : ""));
            return;
        }
        
        result.items.forEach(city => {
            const option = document.createElement("option");
            option.textContent = city.name;
            option.value = city.id;
            
            citiesSelect.append(option);
        });
    }
    
    async function getCountries() {
        
        const response = await window.fetch("countries.php");
        
        return response.ok ? await response.json() : null;
    }
    
    async function getCities(countryId) {
        
        const response = await window.fetch(`cities.php?countryId=${countryId}`);
        
        return response.ok ? await response.json() : null;
    }
});

