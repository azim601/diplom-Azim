import React from "react";
import classes from "./Tutti.module.css";

export default ({ type }) => {
  const  TuttiClasses = [classes. Tutti, classes[type]];

  return <div className={ TuttiClasses.join(" ")}></div>;
};
