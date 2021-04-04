document.addEventListener("DOMContentLoaded", async () => {
    
    document.getElementById("search-btn").addEventListener("click", onSearchButtonClick);
    document.getElementById("update-btn").addEventListener("click", onUpdateButtonClick);
    
    const tabnSearchInput = document.getElementById("tabn-search-input");
    
    const tabnInput = document.getElementById("tabn");
    const surnameInput = document.getElementById("surname");
    const nameInput = document.getElementById("name");
    const patronymicInput = document.getElementById("patronymic");
    const genderInput = document.getElementById("gender");
    const positionInput = document.getElementById("position");
    const departmentInput = document.getElementById("department");
    const date_nInput = document.getElementById("date_n");
    const salaryInput = document.getElementById("salary");

    const employeeCard = document.getElementById("employee-card");

    async function onSearchButtonClick() {
        
        const tabn = tabnSearchInput.value.trim();
        
        if(tabn.length === 0) {
            alert("Поле поиска должно быть заполнено!");
            return;
        }
        
        const result = await getEmployee(tabn);
        if(result === null || !result.success) {
            
            if(!employeeCard.classList.contains("d-none")) {
                employeeCard.classList.add("d-none");
            }
            
            alert("При запросе к серверу произошла ошибка" + (result !== null ? `: ${result.error}` : ""));
            return;
        }
        
        const employee = result.entity;
        
        tabnInput.value = employee.tabn;
        surnameInput.value = employee.surname;
        nameInput.value = employee.name;
        patronymicInput.value = employee.patronymic;
        genderInput.value = employee.gender;
        positionInput.value = employee.position;
        departmentInput.value = employee.department;
        date_nInput.value = employee.date_n;
        salaryInput.value = employee.salary;
        
        employeeCard.classList.remove("d-none");
    }
    
    async function onUpdateButtonClick() {
        
        const tabn = tabnSearchInput.value;
        const salary = salaryInput.value.trim();
        if(salary.length === 0) {
            alert("Поле 'Оклад' должно быть заполнено!");
            return;
        }
        
        const result = await updateEmployee(tabn, salary);
        if(result === null || !result.success) {
            alert("При запросе к серверу произошла ошибка" + (result !== null ? `: ${result.error}` : ""));
        }
        else {
            alert("Данные обновлены");
        }
        
    }
    
    async function updateEmployee(tabn, salary) {
        
        const formData = new FormData();
        formData.append("tabn", tabn);
        formData.append("salary", salary);
        
        const response = await window.fetch("update-employee.php", { method: "POST", body: formData });
        
        return response.ok ? await response.json() : null;
    }
    
    async function getEmployee(tabn) {
        
        const response = await window.fetch(`employees.php?tabn=${tabn}`);
        
        return response.ok ? await response.json() : null;
    }
});

