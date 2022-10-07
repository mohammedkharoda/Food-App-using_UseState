import AvailMeals from "./AvailableMeal";
import MealsSummary from "./MealsSummary";
const Meals = (props) => {
  const addingFoodData = (mealsData) => {
    props.onAddFood(mealsData);
  };

  return (
    <>
      <MealsSummary />
      <AvailMeals onAddFood={addingFoodData} />
    </>
  );
};

export default Meals;
