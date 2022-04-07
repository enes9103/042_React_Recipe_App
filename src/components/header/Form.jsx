import React from "react";
import { FormContainer, FoodInput, Button, Select } from "./HeaderStyles";

const Form = ({ setQuery, setMeal, getData, mealTypes }) => {
  return (
    <FormContainer>
      <FoodInput
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" placeholder="Search">
        Search
      </Button>

      <Select
        name="mealTypes"
        id="mealTypes"
        onChange={(e) => setMeal(e.target.value)}
      >
        {
        mealTypes.map((meal, index) => 
        <option 
        key={index}
        value={meal.toLowerCase()}>
          {meal}
           </option>)
      }
      </Select>
    </FormContainer>
  );
};

export default Form;
