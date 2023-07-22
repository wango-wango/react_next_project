import Link from "next/link";
import React from "react";

import classes from "../../styles/button.module.css";
function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link} className={classes.btn}>
        {props.children}
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} onClick={props.onClick}>
        {props.children}
      </button>
    );
  }
}

export default Button;
