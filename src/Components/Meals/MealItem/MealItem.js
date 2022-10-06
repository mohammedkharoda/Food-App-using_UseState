import React, { useState } from "react";
import classes from "./MealItem.module.css";
import MealForm from "./MealForm";
const MealItem = (props) => {
  const addingFoodHandler = (mealId) => {
    props.onAddFood(mealId);
  };

  return (
    <>
      <li className={classes.meal}>
        <div>
          <h3 className={classes["meals h3"]}>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{props.price}</div>
        </div>
        <div>
          <MealForm
            addingFoodHandler={addingFoodHandler}
            mealId={{
              id: props.id,
              name: props.name,
              description: props.description,
              price: props.price,
            }}
          />
        </div>
      </li>
    </>
  );
};

export default MealItem;
