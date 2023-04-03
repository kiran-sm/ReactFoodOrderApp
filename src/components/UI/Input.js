import React, { Fragment } from "react";
import classes from "./Input.model.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <Fragment>
      <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
      </div>
    </Fragment>
  );
});

export default Input;
