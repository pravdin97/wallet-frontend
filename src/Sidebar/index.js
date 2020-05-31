import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Drawer, List, ListItem, ListItemText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const MENUS = ["Расходные категории", "Доходные категории"];

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  list: {
    width: 250,
  },
}));

const Sidebar = () => {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSidebar(open);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={sidebar} onClose={toggleSidebar(false)}>
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleSidebar(false)}
            onKeyDown={toggleSidebar(false)}
          >
            <List>
              {MENUS.map((menu) => (
                <ListItem button key={String(menu)}>
                  <ListItemText>{menu}</ListItemText>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
        <Typography variant="h6" className={classes.title}>
          Wallet
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Sidebar;
