/* eslint-disable no-unused-vars */
import { useState } from "react";
import CartSummary from "./Components/Cart/CartSummary";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
function App(props) {
  const [cartShown, setCartShown] = useState(false);
  const [foodData, setFoodData] = useState();
  const [foodQuality, setFoodQuality] = useState();
  const showCartHandler = () => {
    setCartShown(true);
  };

  const hiddenCart = () => {
    setCartShown(false);
  };

  const FoodAddHandler = (mealsAddData) => {
    setFoodData(mealsAddData);
  };

  return (
    <div>
      {cartShown && (
        <CartSummary onCloseCart={hiddenCart} onFoodAdding={foodData} />
      )}
      <Header onCartClick={showCartHandler} onFoodAdding={foodData} />
      <main>
        <Meals onAddFood={FoodAddHandler} />
      </main>
    </div>
  );
}

export default App;
