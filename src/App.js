import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Categories from "./Categories";
import Sidebar from "./Sidebar";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Sidebar />
      <Container maxWidth="lg">
        <Categories type="Расходные" />
      </Container>
    </div>
  );
};

export default App;
