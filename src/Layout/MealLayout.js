import React from "react";
import { MealSummary } from "../components/meal-summary/MealSummary";
import { Meals } from "../components/meals/Meals";

const MealLayout = () => {
  return (
    <div>
      <MealSummary />
      <Meals />
    </div>
  );
};

export default MealLayout;
