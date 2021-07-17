import React from 'react';
import {makeStyles, Typography, Slider, Grid} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: '4rem'
  },
});

const SliderQuestions = ({value, questionsLength}) => {
  const classes = useStyles();

  const valuetext = () => {
    return `${value}`;
  }

  return (
    <Grid item container className={classes.root} xs={8}>
      <Typography gutterBottom>
        Questions
      </Typography>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        onChange={valuetext}
        value={value}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={questionsLength}
      />
    </Grid>
  );
}

export default SliderQuestions;
