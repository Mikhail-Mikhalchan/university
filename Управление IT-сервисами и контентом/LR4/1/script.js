document.addEventListener("DOMContentLoaded", showCountry);
document.getElementById("update-btn").addEventListener("click", showCountry);

async function showCountry() {
    const country = await getCountry();
    
    const display = document.getElementById("display-country");
    
    display.textContent = "Goooooday day" + (country === null ? "!" : `, ${country}!`);
}
    
async function getCountry() {
    const response = await fetch("action.php");
    
    return response.ok ? await response.text() : null;
}