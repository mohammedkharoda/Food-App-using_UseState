/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import classes from "./MealForm.module.css";
const MealForm = (props) => {
  const [foodQuantity, setFoodQuantity] = useState(1);
  const foodSelectedHandler = () => {
    props.addingFoodHandler({
      id: props.mealId.id,
      name: props.mealId.name,
      description: props.mealId.description,
      price: props.mealId.price,
      quantity: foodQuantity,
    });
  };

  const foodQuantityHandler = (event) => {
    setFoodQuantity(event.target.value);
    console.log(foodQuantity);
  };

  return (
    <>
      <form className={classes.form}>
        <div>
          <label htmlFor={"amount_" + props.mealId}>Amount</label>
          {/* Destructing for storing Data */}
          <input
            id={"amount_" + props.mealId}
            type={"number"}
            min={1}
            max={5}
            defaultValue={1}
            onChange={(event) => {
              foodQuantityHandler(event);
            }}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            foodSelectedHandler();
          }}
        >
          + Add
        </button>
      </form>
    </>
  );
};

export default MealForm;
