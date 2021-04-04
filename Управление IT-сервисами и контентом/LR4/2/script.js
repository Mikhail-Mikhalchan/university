document.addEventListener("DOMContentLoaded", async () => {
    
    document.getElementById("log-button").addEventListener("click", onLogButtonClick);
    
    async function onLogButtonClick() {
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        
        if(username.length === 0 || email.length === 0) {
            alert("Поля 'Имя' и 'Email' должны быть заполнены!");
            return;
        }
        
        const logContent = await prepareLogContent(username, email);
        
        console.log(logContent);
        
        alert("Лог в консоль записан.");
    }
    
    async function prepareLogContent(username, email) {
        
        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        
        const response = await window.fetch("action.php", { method: "POST", body: formData });
        
        return response.ok ? await response.text() : null;
    }
});

