document.addEventListener("DOMContentLoaded", async () => {
    
    document.getElementById("save-button").addEventListener("click", onSaveButtonClick);
    
    async function onSaveButtonClick() {
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        
        if(name.length === 0 || email.length === 0) {
            alert("Поля 'Имя' и 'Email' должны быть заполнены!");
            return;
        }
        
        const result = await saveUser(name, email);
        
        if(result !== null && result.success) {
            alert("Пользователь сохранен");
            nameInput.value = "";
            emailInput.value = "";
        }
        else {
            alert("При запросе произошла ошибка" + (result !== null ? `: ${result.error}` : ""));
        }
    }
    
    async function saveUser(name, email) {
        
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        
        const response = await window.fetch("action.php", { method: "POST", body: formData });
        
        return response.ok ? await response.json() : null;
    }
});

