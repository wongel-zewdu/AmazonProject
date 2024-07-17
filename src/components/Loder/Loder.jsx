import React from 'react'
import { FadeLoader } from "react-spinners";
import classes from "./Loder.module.css"
const Loder = () => {
  return (
    <div className={classes.loder}>
      <FadeLoader />
    </div>
  );
}

export default Loder