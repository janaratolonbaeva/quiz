import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Button, Grid, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {resetState} from "../../store/actions/questionsAction";

const useStyle = makeStyles({
  col: {
    marginBottom: '20px',
    textAlign: 'center'
  }
});

const Result = () => {
  const dispatch = useDispatch();
  const score = useSelector(state => state.questions.score);
  const classes = useStyle();

  const changeHandler = () => {
    dispatch(resetState);
  };

  const general = score.easy + score.medium + score.hard;

  return (
    <Grid container item direction="column" xs={8}>
      <Grid item xs className={classes.col}>
        <Typography>{`Easy category: ${score.easy}`}</Typography>
      </Grid>
      <Grid item xs className={classes.col}>
        <Typography>{`Medium category: ${score.medium}`}</Typography>
      </Grid>
      <Grid item xs className={classes.col}>
        <Typography>{`Hard category: ${score.hard}`}</Typography>
      </Grid>
      <Grid item xs className={classes.col}>
        <Typography><strong>{`All category: ${general}`}</strong></Typography>
      </Grid>
      <Grid item xs className={classes.col}>
        <Button component={Link} to="/"
                color="primary" variant="contained"
                onChange={changeHandler}
        >Try again</Button>
      </Grid>
    </Grid>
  );
};

export default Result;