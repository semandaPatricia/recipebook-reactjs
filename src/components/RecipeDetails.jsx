import React from "react";

const recipes = [
  {
    title: "Servings",
    value: "4"
  },
  {
    title: "Prep Time",
    value: "5 min"
  },
  {
    title: "Cook Time",
    value: "25 min"
  },
  {
    title: "Total Time",
    value: "30 min"
  }
];

function RecipeDetails() {
  return (
    <div className="recipe_details">
      <ul className="pb-10 list-none bg-primary text-amber-500 text-accent flex py-6 bg-slate-600">
        {recipes.map((detail, index) => (
          <li key={index} className="flex-1 flex justify-center items-center flex-col font-serif text-base font-normal tracking-wider italic">
            <span className="font-bold text-xl uppercase tracking-wide">{detail.title}</span>
            {detail.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;


