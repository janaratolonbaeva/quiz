import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {Container, Grid, makeStyles} from "@material-ui/core";
import Questionnaire from "./containers/Questionnaire/Questionnaire";
import Preferences from "./containers/Preferences/Preferences";
import Result from "./containers/Result/Result";

const useStyle = makeStyles({
  mainGrid: {
    height: '100vh',
  }
})

const App = () => {
  const classes = useStyle();

  return (
    <BrowserRouter>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" className={classes.mainGrid}>
          <Switch>
            <Route path="/" exact component={Preferences} />
            <Route path="/questionnaire" component={Questionnaire} />
            <Route path="/result" component={Result} />
          </Switch>
        </Grid>
      </Container>
    </BrowserRouter>
  );
}

export default App;