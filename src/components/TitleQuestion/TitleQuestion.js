import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginBottom: '3rem'
  }
});

const TitleQuestion = ({title}) => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.root}>{title}</Typography>
    </div>
  );
};

export default TitleQuestion;