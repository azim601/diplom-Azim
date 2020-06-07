import React from "react";
import classes from "./TuttiControls.module.css";
import TuttiControl from "./TuttiControl/TuttiControl";
import Button from "../../UI/Button/Button";

export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = Object.keys(ingredients).map((ingredient) => (
    <TuttiControl
      key={ingredient}
      ingredient={ingredient}
      label={ingredients[ingredient].label}
      disabled={ingredients[ingredient].quantity === 0}
    />
  ));

  return (
    <div className={classes.TuttiControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order.
      </Button>
    </div>
  );
};
