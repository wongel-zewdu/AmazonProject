import React from 'react'
import { Link } from "react-router-dom";
import classes from "../category/Category.module.css";

const categoryCard = ({data}) => {
  return (
    <div className={classes.catagory}>
      <Link to={`/category/${data.name}`} className={classes.catagory__link}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} />
        <p>shop now</p>
      </Link>
    </div>
  );
}

export default categoryCard

