document.addEventListener("DOMContentLoaded", async () => {
    
    var doughBlock = document.querySelector(".pizza-designer__ingredient-type-is-dough");
    var cheeseBlock = document.querySelector(".pizza-designer__ingredient-type-is-cheese");
    var sauceBlock = document.querySelector(".pizza-designer__ingredient-type-is-sauce");
    var otherBlock = document.querySelector(".pizza-designer__ingredient-type-is-other");
    
    var ingredientComposition = document.querySelector(".pizza-composition__ingredients");
    var compositionTotal = document.querySelector(".pizza-composition__total");
    
    await fillIngredients();
    
    async function fillIngredients() {
        const result = await getIngredients();
        if(result === null || !result.success) {
            alert("При запросе к серверу произошла ошибка" + (result !== null ? `: ${result.error}` : ""));
            return;
        }
        
        //тесто
        result.items.filter(item => item.type.id == 1).forEach(item => doughBlock.innerHTML += createIngredientAsHtml(item));
        
        //сыр
        result.items.filter(item => item.type.id == 2).forEach(item => cheeseBlock.innerHTML += createIngredientAsHtml(item));
        
        //соус
        result.items.filter(item => item.type.id == 3).forEach(item => sauceBlock.innerHTML += createIngredientAsHtml(item));
        
        //другие
        result.items.filter(item => item.type.id == 4).forEach(item => otherBlock.innerHTML += createIngredientAsHtml(item));
        
        document.querySelectorAll(".pizza-ingredient").forEach(item => item.addEventListener("click", onIngredientClick));
    }
    
    function onIngredientClick() {
        const block = this.closest(".pizza-designer__ingredient-type");
        
        if(block.classList.contains("pizza-designer__ingredient-type-is-single")) {
            onSingleIngredientType(this, block);
        }
        else {
            onMultipleIngredientType(this, block);
        }
    }
    
    function onSingleIngredientType(ingredient, block) {
        if(ingredient.classList.contains("pizza-ingredient-is-active")) {
            
            ingredient.classList.remove("pizza-ingredient-is-active");
            updateToComposition(ingredient, false);
            return;
        }
        
        block.querySelectorAll(".pizza-ingredient").forEach(item => {
            if(item.classList.contains("pizza-ingredient-is-active")) {
                item.classList.remove("pizza-ingredient-is-active");
                updateToComposition(item, false);
            }
        });
        
        ingredient.classList.add("pizza-ingredient-is-active");
        updateToComposition(ingredient, true);
    }
    
    function onMultipleIngredientType(ingredient, block) {
        const added = ingredient.classList.contains("pizza-ingredient-is-active");
        
        ingredient.classList.toggle("pizza-ingredient-is-active");
        updateToComposition(ingredient, !added);
    }
    
    function updateToComposition(ingredient, added) {
        let total = parseFloat(compositionTotal.dataset.total);
        const price = parseFloat(ingredient.dataset.price);
        
        if(added === true) {
            ingredientComposition.innerHTML += `<span class="pizza-composition__ingredient" data-id="${ingredient.dataset.id}" data-price="${ingredient.dataset.price}">${ingredient.dataset.name}</span>`;
            
            total += price;
        }
        else {
            const item = Array.from(ingredientComposition.children).find(item => item.dataset.id === ingredient.dataset.id);
            
            if(item != null) {
                item.remove();
            }
            
            total -= price;
        }
        
        compositionTotal.dataset.total = total;
        compositionTotal.textContent = total;
    }
    
    function createIngredientAsHtml(ingredient) {
        return `
            <div class="pizza-ingredient" 
                    data-id="${ingredient.id}" 
                    data-name="${ingredient.name}" 
                    data-price="${ingredient.price}" 
                    data-type-name="${ingredient.type.name}" 
                    data-type-id="${ingredient.type.id}">
                
                <div class="pizza-ingredient__image-wrap">
                    <img class="pizza-ingredient__image" src="${ingredient.img}">
                </div>
                
                <div class="pizza-ingredient__name">${ingredient.name}</div>
                
                <div class="pizza-ingredient__price">${ingredient.price}</div>
            </div>
        `;
    }
    
    async function getIngredients() {
        
        const response = await window.fetch("pizza-ingredients.php");
        
        return response.ok ? await response.json() : null;
    }
});

