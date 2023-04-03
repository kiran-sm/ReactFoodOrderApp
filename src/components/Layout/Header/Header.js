import { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImg from "../../../assets/meals.jpg";
import HeaderCart from "../HeaderCart/HeaderCart";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCart onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="MealsImage" />
      </div>
    </Fragment>
  );
};
export default Header;
