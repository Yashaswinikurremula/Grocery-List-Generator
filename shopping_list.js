let shoppingList = [];

function addToShoppingList(ingredient) {
    shoppingList.push(ingredient);
    displayShoppingList(); // Call displayShoppingList after adding an item
}

function displayShoppingList() {
    let tableBody = document.getElementById("shoppingListBody");
    tableBody.innerHTML = ""; // Clear existing content

    for (let ingredient of shoppingList) {
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
    }
}

document.getElementById("viewShoppingList").addEventListener("click", displayShoppingList);
