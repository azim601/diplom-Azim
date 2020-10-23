import React from "react";
import Tutti from "./Tutti/Tutti";
import classes from "./TuttiKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      ingredientsOutput.push(<Tutti key={ingredient + i} type={ingredient} />);
    }
  });

  return (
    <div className={classes.TuttiKit}>
      <div className={classes.bento}>
        <div className={classes.Tuttu}>{ingredientsOutput}</div>
      </div>
      <div className={classes.price}> {price} som</div>
    </div>
  );
};