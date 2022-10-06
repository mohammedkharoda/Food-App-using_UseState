import React from "react";
import classes from "./Header.module.css";
import mealsImages from "../../Components/assest/rachel-park-hrlvr2ZlUNk-unsplash.jpg";
import HeaderCart from "./HeaderCart";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCart
          onCartClick={props.onCartClick}
          onAddFoodData={props.onFoodAdding}
        />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImages} alt="Meals" />
      </div>
    </>
  );
};

export default Header;
