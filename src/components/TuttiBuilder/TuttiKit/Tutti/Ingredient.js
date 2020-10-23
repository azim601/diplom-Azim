import React from "react";
import classes from "./Ingredient.module.css";

export default ({ type }) => {
  const IngredientClasses = [classes.Ingredient, classes[type]];

  return <div className={IngredientClasses.join(" ")}></div>;
};