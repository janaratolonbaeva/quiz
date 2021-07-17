import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    cursor: 'pointer',
    marginBottom: '10px',
    '&:hover': {
      boxShadow: '0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5)',
      transform: 'translateY(-0.1rem)',
      transition: 'transform 150ms'
    }
  },
  prefix: {
    width: '50px',
    lineHeight: '50px',
    background: '#3f51b5',
    color: '#fff',
    textAlign: 'center'
  },
  text: {
    paddingLeft: '20px',
    lineHeight: '50px',
  },
  textBlock: {
    background: '#fff',
  }
})

const QuestionnaireItem = ({alphabetLetter, answerChoice, handleClick}) => {
  const classes = useStyle();

  return (
    <Grid item container alignItems="center" className={classes.root} onClick={handleClick}>
      <Grid item>
        <Typography variant="body1" className={classes.prefix}>{alphabetLetter}</Typography>
      </Grid>
      <Grid item xs className={classes.textBlock}>
        <Typography variant="body2" className={classes.text}>{answerChoice}</Typography>
      </Grid>
    </Grid>
  );
};

export default QuestionnaireItem;