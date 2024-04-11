import React, { useState } from "react";
import { RiCheckboxBlankLine, RiCheckboxLine } from 'react-icons/ri';
function RecipeIngredients() {
  // Define state to manage checkbox values
  const [ingredients, setIngredients] = useState([
    { name: "spaghetti", label: "8 oz. spaghetti or linguine pasta", checked: false },
    { name: "basilLeaves", label: "2 cups fresh basil leaves, plus 4-8 reserved leaves for garnish", checked: false },
    { name: "garlic", label: "2 cloves garlic", checked: false },
    { name: "garlic", label: " 1/2 cup olive oil", checked: false },
    { name: "garlic", label: "2 cloves garlic", checked: false },
    { name: "garlic", label: "1/2 cup grated Parmesan cheese, plus 2 tbsp. for garnish.", checked: false },
    { name: "garlic", label: "1 pinch of salt", checked: false },
    { name: "garlic", label: "2 tbsp. pine nuts or blanched almonds", checked: false },
    { name: "garlic", label: "1 pint cherry tomatoes", checked: false },
    { name: "garlic", label: "1 pint cherry tomatoes", checked: false },
  ]);

  // Function to handle checkbox changes
  const handleCheckboxChange = (name) => {
    setIngredients(prevIngredients => {
      return prevIngredients.map(ingredient => {
        if (ingredient.name === name) {
          return { ...ingredient, checked: !ingredient.checked };
        }
        return ingredient;
      });
    });
  };

  return (
<div className="ingredients mb-6">
      {ingredients.map(ingredient => (
        <label key={ingredient.name} className="container flex items-center">
          
          <input
            type="checkbox"
            name={ingredient.name}
            checked={ingredient.checked}
            onChange={() => handleCheckboxChange(ingredient.name)}
            className="hidden"
          />
        
          {ingredient.checked ? <RiCheckboxLine className="checkmark" /> : <RiCheckboxBlankLine className="checkmark" />}
          <span>{ingredient.label}</span>
        </label>
      ))}
    </div>
  );
}

export default RecipeIngredients;
