let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || []; 

function displayShoppingList() {
    let tableBody = document.getElementById("shoppingListBody");
    tableBody.innerHTML = ""; 

    shoppingList.forEach(ingredient => {
        let row = document.createElement("tr");
        let ingredientCell = document.createElement("td");
        ingredientCell.textContent = ingredient;
        let checkboxCell = document.createElement("td");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkboxCell.appendChild(checkbox);

        row.appendChild(ingredientCell);
        row.appendChild(checkboxCell);
        tableBody.appendChild(row);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    displayShoppingList(); 
});
