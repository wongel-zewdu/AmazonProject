import React from 'react'
import { Link } from "react-router-dom";
import classes from "../category/Category.module.css";
const categoryCard = ({data}) => {
  return (
    <div className={classes.catagory}>
      <a href="" className={classes.catagory__link}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} />
        <p>shop now</p>
      </a>
    </div>
  );
}

export default categoryCard

