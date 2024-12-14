import React from 'react';
import '../App.css';

const MenuPage = () => {
  const recipes = [
    {
      id: 1,
      title: 'Chicken Curry',
      type: 'Indian',
      rating: 5,
      img: 'https://via.placeholder.com/300?text=Chicken+Curry',
      ingredients: [
        '500g chicken',
        '2 onions, finely chopped',
        '2 tomatoes, pureed',
        '1 tbsp ginger garlic paste',
        '2 tbsp curry powder',
        '3 tbsp cooking oil',
        'Salt to taste',
        'Fresh coriander for garnish',
      ],
      instructions: [
        'Heat oil in a pan and sauté onions until golden.',
        'Add ginger garlic paste and cook for a minute.',
        'Add tomatoes and cook until the oil separates.',
        'Add chicken and curry powder. Cook until chicken is tender.',
        'Garnish with fresh coriander and serve hot with rice or naan.',
      ],
    },
    {
      id: 2,
      title: 'Paneer Butter Masala',
      type: 'Indian',
      rating: 4,
      img: 'https://via.placeholder.com/300?text=Paneer+Butter+Masala',
      ingredients: [
        '200g paneer, cubed',
        '2 tomatoes, pureed',
        '1 onion, finely chopped',
        '1/2 cup cream',
        '2 tbsp butter',
        '1 tbsp garam masala',
        'Salt to taste',
        'Fresh coriander for garnish',
      ],
      instructions: [
        'Heat butter in a pan and sauté onions until translucent.',
        'Add tomato puree and cook for 5 minutes.',
        'Add garam masala and salt. Stir well.',
        'Add paneer cubes and cream. Simmer for 5 minutes.',
        'Serve hot with naan or rice.',
      ],
    },
    {
      id: 3,
      title: 'Chicken Biriyani',
      type: 'Indian',
      rating: 5,
      img: 'https://via.placeholder.com/300?text=Chicken+Biriyani',
      ingredients: [
        '2 cups basmati rice',
        '500g chicken',
        '2 onions, sliced',
        '3 tbsp biriyani masala',
        '1 cup yogurt',
        'Fresh coriander and mint',
        'Salt to taste',
      ],
      instructions: [
        'Marinate chicken with yogurt and biriyani masala for 1 hour.',
        'Cook rice until 70% done and set aside.',
        'Heat oil in a pot, fry onions until golden, and remove half for garnishing.',
        'Add chicken and cook until tender. Layer chicken and rice, topping with onions and herbs.',
        'Cover and cook on low heat for 20 minutes. Serve hot.',
      ],
    },
    {
      id: 4,
      title: 'Chocolate Cake',
      type: 'Dessert',
      rating: 5,
      img: 'https://via.placeholder.com/300?text=Chocolate+Cake',
      ingredients: [
        '2 cups flour',
        '1 cup sugar',
        '1/2 cup cocoa powder',
        '2 eggs',
        '1/2 cup butter',
        '1 cup milk',
        '1 tsp baking powder',
      ],
      instructions: [
        'Preheat the oven to 350°F (175°C).',
        'Mix flour, sugar, cocoa powder, and baking powder in a bowl.',
        'Add eggs, melted butter, and milk. Mix until smooth.',
        'Pour the batter into a greased cake pan and bake for 30 minutes.',
        'Let the cake cool before serving or frosting.',
      ],
    },
    {
      id: 5,
      title: 'Spaghetti Carbonara',
      type: 'Italian',
      rating: 5,
      img: 'https://via.placeholder.com/300?text=Spaghetti+Carbonara',
      ingredients: [
        '400g spaghetti',
        '150g pancetta, diced',
        '2 eggs',
        '50g Parmesan cheese, grated',
        '2 cloves garlic, minced',
        'Salt and pepper to taste',
      ],
      instructions: [
        'Cook spaghetti in salted boiling water until al dente.',
        'In a pan, sauté pancetta until crispy, then add garlic and cook for 1 minute.',
        'In a bowl, whisk eggs and Parmesan cheese together.',
        'Drain spaghetti and mix with pancetta and garlic.',
        'Remove from heat, then mix in the egg and cheese mixture. Stir quickly to coat pasta without scrambling the eggs.',
        'Season with salt and pepper, then serve immediately.',
      ],
    },
    {
      id: 6,
      title: 'Tacos',
      type: 'Mexican',
      rating: 5,
      img: 'https://via.placeholder.com/300?text=Tacos',
      ingredients: [
        '8 small taco shells',
        '500g ground beef',
        '1 packet taco seasoning',
        '1 cup shredded lettuce',
        '1 cup diced tomatoes',
        '1 cup shredded cheddar cheese',
        'Salsa and sour cream for serving',
      ],
      instructions: [
        'Cook ground beef in a skillet over medium heat until browned.',
        'Add taco seasoning and water as per packet instructions. Cook until thickened.',
        'Warm taco shells in the oven or microwave.',
        'Fill each taco shell with beef, lettuce, tomatoes, and cheese.',
        'Top with salsa and sour cream, then serve.',
      ],
    },
    {
      id: 7,
      title: 'Caesar Salad',
      type: 'Salad',
      rating: 4,
      img: 'https://via.placeholder.com/300?text=Caesar+Salad',
      ingredients: [
        '1 head of romaine lettuce, chopped',
        '1/2 cup croutons',
        '1/4 cup grated Parmesan cheese',
        '1/3 cup Caesar dressing',
        'Optional: grilled chicken slices',
      ],
      instructions: [
        'In a large bowl, toss romaine lettuce, croutons, and Parmesan cheese.',
        'Drizzle Caesar dressing over the salad and toss to coat evenly.',
        'Top with grilled chicken slices if desired.',
        'Serve immediately.',
      ],
    },
    {
      id: 8,
      title: 'Pepperoni Pizza',
      type: 'Italian',
      rating: 5,
      img: 'https://via.placeholder.com/300?text=Pepperoni+Pizza',
      ingredients: [
        '1 pizza dough',
        '1/2 cup marinara sauce',
        '1 cup shredded mozzarella cheese',
        '50g pepperoni slices',
        '1 tsp dried oregano',
      ],
      instructions: [
        'Preheat oven to 475°F (250°C).',
        'Spread marinara sauce evenly on the pizza dough.',
        'Sprinkle shredded mozzarella cheese over the sauce.',
        'Add pepperoni slices on top and sprinkle with oregano.',
        'Bake in the oven for 10-12 minutes until crust is golden and cheese is melted.',
      ],
    },
  ];
  

  return (
    <div className="menu-page">
      <h1 className="menu-title">Explore Our Recipes</h1>
      <section className="recipe-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <div className="recipe-image-container">
              <img src={recipe.img} alt={recipe.title} className="recipe-image" />
            </div>
            <div className="recipe-info">
              <h3 className="recipe-title">{recipe.title}</h3>
              <p className="recipe-rating">⭐ {recipe.rating}</p>
              <p className="recipe-type">{recipe.type}</p>
              <button
                className="view-recipe-btn"
                onClick={() =>
                  alert(
                    `Ingredients:\n${recipe.ingredients.join(
                      '\n'
                    )}\n\nInstructions:\n${recipe.instructions.join('\n')}`
                  )
                }
              >
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default MenuPage;
