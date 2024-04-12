import React from "react";
import "../../styles/test.module.css";
import RecipeIngredients from "../../components/RecipeIngredients";
import RecipeInstructions from "../../components/RecipeInstructions";
import RecipeDetails from "../../components/RecipeDetails";
import RecipeDescription from "../../components/RecipeDescription";
const Home = () => {
  return (
    <>
    <div id="cover">
  <h2 className="uppercase font-bold text-3xl mb-5">The Bun Kitchen</h2>
  <h1 className="font-semibold"  style={{ fontFamily: "'Playfair Display', serif" }}>Pasta with Pesto &amp; Tomatoes</h1>
  <div className="content">
    <figure className="relative">
      <img
        src="https://images.unsplash.com/photo-1593253787226-567eda4ad32d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2434&q=80"
        alt="spaghetti with pesto sauce and cherry tomatoes."
        className="object-cover w-1/2 h-64 md:h-80 lg:h-96 xl:h-112 2xl:h-128"
        // Adjust the height for different screen sizes (you can tweak the values)
      />
    </figure>
    
    <span className="bg-amber-400 p-1">
      <a href="#recipe">Skip to recipe &#10549;</a>
    </span>
  </div>
</div>

   {/*Description-title of food to be made */}
   <RecipeDescription/>

{/*servings,time */}
<RecipeDetails/>

{/*SECTION with INGREDIENTS AND PROCESS*/}


    <div id="recipe" className="p-6">
      <div className="recipe-content w-full flex flex-col sm:flex-row mt-14">
        {/* Ingredients List */}
        <div className="ing-list w-full sm:w-1/2 border-b sm:border-r border-primary mb-8 sm:mb-0 sm:pr-8">
          <h2 className="font-serif text-2xl font-semibold uppercase tracking-wide mb-8">
            The Ingredients
          </h2>
          <RecipeIngredients />
          <p className="variation text-base mb-12">
            <span className="font-semibold uppercase tracking-wider">
              Variation:
            </span>{" "}
            Got no time, or no fresh basil? Use a 6 ounce jar of prepared pesto instead.
          </p>
          <figure className="relative">
            <img
              src="https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="tomato halves surrounded by basil leaves and peppercorns."
              className="object-cover w-full h-full"
            />
          </figure>
        </div>

        {/* Recipe Instructions */}
        <div className="w-full sm:w-1/2">
          <RecipeInstructions />
        </div>
      </div>
    </div>
  




    </>
  );
};

export default Home;