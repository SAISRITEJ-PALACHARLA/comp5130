// Sample data structure for recipes (in a real app, this could be fetched from an API)
const recipes = [
    { title: 'Butter Chicken', type: 'non-vegetarian', rating: 4, isNew: false },
    { title: 'Paneer Tikka', type: 'vegetarian', rating: 5, isNew: true },
    { title: 'Chocolate Cake', type: 'desserts', rating: 5, isNew: true },
    { title: 'Grilled Salmon', type: 'non-vegetarian', rating: 4, isNew: false },
    { title: 'Vegetable Stir Fry', type: 'vegetarian', rating: 3, isNew: false }
];

// Function to filter recipes
function filterRecipes() {
    const typeFilter = document.getElementById('recipeTypeFilter').value;
    let filteredRecipes = recipes;

    // Filter by type
    if (typeFilter !== 'all') {
        filteredRecipes = recipes.filter(recipe => recipe.type === typeFilter);
    }

    // Display filtered recipes
    displayRecipes(filteredRecipes);
}

// Function to sort recipes
function sortRecipes() {
    const sortFilter = document.getElementById('recipeSortFilter').value;
    let sortedRecipes = [...recipes]; // Clone the original array

    if (sortFilter === 'rating') {
        // Sort by rating
        sortedRecipes.sort((a, b) => b.rating - a.rating);
    } else if (sortFilter === 'new') {
        // Sort by newness
        sortedRecipes = sortedRecipes.filter(recipe => recipe.isNew);
    } else {
        // Sort by popularity (default or other metric)
        sortedRecipes.sort((a, b) => a.title.localeCompare(b.title));
    }

    // Display sorted recipes
    displayRecipes(sortedRecipes);
}

// Function to display recipes dynamically
function displayRecipes(filteredRecipes) {
    const recipeGrid = document.querySelector('.recipe-grid');
    recipeGrid.innerHTML = ''; // Clear the grid

    filteredRecipes.forEach(recipe => {
        const recipeCard = `
            <div class="recipe-card">
                <img src="images/${recipe.title.replace(/ /g, '-').toLowerCase()}.jpg" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <p><strong>Rating:</strong> ⭐${recipe.rating}</p>
                <button onclick="showRecipe('${recipe.title}')">View Recipe</button>
            </div>
        `;
        recipeGrid.innerHTML += recipeCard;
    });
}

// Initial load of all recipes
window.onload = function() {
    displayRecipes(recipes); // Display all recipes on page load
};
