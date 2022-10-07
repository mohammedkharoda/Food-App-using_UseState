import React from "react";
import classes from "../Meals/AvailableMeals.module.css";
import { DUMMY_MEALS } from "./Dummy_meals";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const AvailMeals = (props) => {
  // functions
  const addFoodHandler = (mealsId) => {
    props.onAddFood(mealsId);
  };
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      // mealLists function pass
      onAddFood={addFoodHandler}
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <>
      <section className={classes.meals}>
        <Card onItems={props.mealList}>
          <ul>{mealList}</ul>
        </Card>
      </section>
    </>
  );
};

export default AvailMeals;
