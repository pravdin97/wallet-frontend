import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

import CategoryItem from "./CategoryItem";
import CategoryService from "../services/CategoryService";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 560,
    backgroundColor: theme.palette.background.default,
  },
}));

const Categories = ({ type }) => {
  const classes = useStyles();
  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    CategoryService.getCategories()
      .then(({ data }) => data)
      .then((list) => setCategoriesList(list))
      .catch((reason) => console.log(reason));
  }, []);

  return (
    <>
      <h1>{type}</h1>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Ваши расходные категории
          </ListSubheader>
        }
        className={classes.root}
      >
        {categoriesList.map((category) => (
          <CategoryItem
            key={String(category.id)}
            category={category}
            level={1}
          />
        ))}
      </List>
    </>
  );
};

export default Categories;
