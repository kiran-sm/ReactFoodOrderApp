import { Fragment } from "react";
import MealSummary from "./MealSummary/MealSummary";
import AvailableMeal from "./AvailableMeals/AvailableMeals";

const Meals = (props) => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeal />
    </Fragment>
  );
};
export default Meals;
