/* eslint-disable no-unused-vars */
import { useState } from "react";
import CartSummary from "./Components/Cart/CartSummary";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
function App(props) {
  const [cartShown, setCartShown] = useState(false);
  const [foodData, setFoodData] = useState();
  const [foodInCart, setFoodInCart] = useState([]);
  const showCartHandler = () => {
    setCartShown(true);
  };

  const hiddenCart = () => {
    setCartShown(false);
  };

  const FoodAddHandler = (mealsAddData) => {
    setFoodData(mealsAddData);
    const foundMealInCartIndex = foodInCart.findIndex(
      (foodItem) => foodItem.id === mealsAddData.id
    );
    if (foundMealInCartIndex === -1) {
      setFoodInCart((prevValue) => {
        return [...prevValue, mealsAddData];
      });
    } else {
      let updateCartData = foodInCart.filter(
        (cartItem) => cartItem.id === mealsAddData.id
      );
      updateCartData = [...updateCartData, mealsAddData];
    }
  };
  
  return (
    <div>
      {cartShown && (
        <CartSummary
          onCloseCart={hiddenCart}
          onFoodAdding={foodData}
          onCartDetails={foodInCart}
        />
      )}
      <Header
        onCartClick={showCartHandler}
        onFoodAdding={foodData}
        onCartQuantity={foodInCart.length}
      />
      <main>
        <Meals onAddFood={FoodAddHandler} />
      </main>
    </div>
  );
}

export default App;
