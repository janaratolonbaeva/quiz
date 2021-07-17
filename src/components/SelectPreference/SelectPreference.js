import React from 'react';
import {Grid, MenuItem, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    marginBottom: '20px'
  }
});

const SelectPreference = ({options, label, name, value, onChange}) => {
  const classes = useStyle();


  return (
    <Grid item xs className={classes.root}>
      <TextField
        select
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        fullWidth
      >
        {options ? options.map(option => (
          <MenuItem key={option.id} value={option.value ? option.value : option.id}>
            {option.name}
          </MenuItem>
        )) : null}
      </TextField>
    </Grid>
  );
};

export default SelectPreference;