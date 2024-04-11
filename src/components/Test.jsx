import React from "react";
import "../styles/test.module.css";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import RecipeDetails from "./RecipeDetails";
import RecipeDescription from "./RecipeDescription";
const Test = () => {
  return (
    <>
      <section id="cover">
        <h2 className="uppercase bold text-3xl">The Bun Kitchen</h2>

        <div className="content">
          <figure className="relative">
            <img
              src="https://images.unsplash.com/photo-1593253787226-567eda4ad32d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2434&q=80"
              alt="spaghetti with pesto sauce and cherry tomatoes."
              className="object-cover w-1/2 h-1/2 block"
            />
          </figure>
          <h1>Pasta with Pesto &amp; Tomatoes</h1>
          <span>
            <a href="#recipe">View full recipe &#10549;</a>
          </span>
        </div>
      </section>

      <section id="recipe" className="p-6">

         {/*Description-title of food to be made */}
       <RecipeDescription/>
       
        {/*servings,time */}
        <RecipeDetails/>

        <div className="recipe-content w-full flex mt-14">
          <div className="ing-list w-1/2 border-r border-primary ">
            <h2 className="font-serif text-2xl font-semibold uppercase tracking-wide mb-8">
              The Ingredients
            </h2>
            {/*Ingredients */}
            <RecipeIngredients />
            <p className="variation text-base mb-12">
              <span className="font-semibold uppercase tracking-wider">
                Variation:
              </span>{" "}
              Got no time, or no fresh basil? Use a 6 ounce jar of prepared
              pesto instead.
            </p>
            <figure className="ing-list w-full flex-1 relative">
              <img
                src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="tomato halves surrounded by basil leaves and peppercorns."
                className="object-cover w-full h-full block"
              />
            </figure>
          </div>

          {/*Recipe instructions-process */}
          <RecipeInstructions />
        </div>
      </section>
    </>
  );
};

export default Test;
