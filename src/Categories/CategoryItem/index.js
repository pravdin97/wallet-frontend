import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import CategoryList from "../CategoryList";

const useStyles = makeStyles((theme, level) => ({
  nested: {
    paddingLeft: (level) => level * theme.spacing(2),
  },
}));

const CategoryItem = ({ category, level }) => {
  const classes = useStyles(level);
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={toggle} className={classes.nested}>
        <ListItemText>
          <Typography component="h2">{category.name}</Typography>
        </ListItemText>
        {category.childrens?.length ? (
          open ? (
            <ExpandLess />
          ) : (
            <ExpandMore />
          )
        ) : null}
      </ListItem>
      {category.childrens?.length > 0 && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <CategoryList items={category.childrens} level={level + 1} />
        </Collapse>
      )}
    </>
  );
};

export default CategoryItem;
