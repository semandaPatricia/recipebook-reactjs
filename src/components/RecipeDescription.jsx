import React from "react";

const recipes = [
  {
    title: "Pasta with Pesto & Tomatoes",
    description: [
      "This quick and delicious pasta dish is the perfect way to use up a summer bounty of basil and tomatoes!",
      "Don't have a green thumb? Never fear! You can knock out this classic pasta dish in no time with a jar of prepared pesto sauce."
    ]
  },
  // You can add more recipes here as needed
];

function RecipeDescription() {
  return (
    <div>
      {recipes.map((recipe, index) => (
        <div key={index}>
          <h1 className="pb-3">{recipe.title}</h1>
          <div className="description pb-14 pt-5">
            {recipe.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecipeDescription;
