import React from "react";

function RecipeInstructions() {
  const instructions = [
    "Bring 4 quarts of water to a rolling boil in a large pot. Salt the water generously and add the pasta.",
    "While the pasta cooks, make the pesto.",
    "Heat a large skillet over medium heat.",
    "Add the 1/2 tsp. olive oil to the heated skillet.",
    "Add the cherry tomatoes to the skillet and let them blister, stirring occasionally and gently so they don't burst.",
    "Remove tomatoes from the pan and set aside.",
    "Drain the pasta, reserving 1/4 cup of the cooking water.",
    "Return the pasta to the pot",
    "Add the reserved cooking water and pesto to the pasta and stir to mix",
    "Plate the pasta and add 6-8 tomatoes to each plate",
    "Garnish with reserved basil leaves and Parmesean and serve. Buon Appetito!"
  ];

  return (
    <div className="recipe-list pl-14">
      <h2 className="font-bold uppercase pb-10">The Process</h2>
      <ol className="instructions list-none counter-reset m-0 p-0 ml-10">
        {instructions.map((instruction, index) => (
          <li key={index} className="mb-4">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeInstructions;
