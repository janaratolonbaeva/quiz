import React, {useEffect, useState} from 'react';
import {Button, Grid, TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import SelectPreference from "../../components/SelectPreference/SelectPreference";
import {changeAmount, changeCategory, changeDifficulty, changeType} from "../../store/actions/preferencesAction";
import {difficulties, types} from "./preferencesArrays";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
  col: {
    marginBottom: '20px',
    textAlign: 'center'
  }
});

const Preferences = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const category = useSelector(state => state.preferences.category);
  const difficulty = useSelector(state => state.preferences.difficulty);
  const type = useSelector(state => state.preferences.type);
  const amount = useSelector(state => state.preferences.amount);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://opentdb.com/api_category.php');
      setCategories(response.data.trivia_categories)
    } catch (e) {
      console.error(e);
    }
  }, [setCategories]);

  const handleChangeCategory = e => {
    dispatch(changeCategory(e.target.value));
  }

  const handleChangeDifficulty = e => {
    dispatch(changeDifficulty(e.target.value));
  }

  const handleChangeType = e => {
    dispatch(changeType(e.target.value));
  }

  const handleChangeAmount = e => {
    dispatch(changeAmount(e.target.value));
  }

  return (
    <Grid container item direction="column" xs={8}>
      <SelectPreference
        options={categories}
        label="Select Category"
        value={category}
        onChange={handleChangeCategory}
      />
      <SelectPreference
        options={difficulties}
        label="Select Difficulty"
        value={difficulty}
        onChange={handleChangeDifficulty}
      />
      <SelectPreference
        options={types}
        label="Select Type"
        value={type}
        onChange={handleChangeType}
      />
      <Grid item xs className={classes.col}>
        <TextField
          fullWidth
          label="Amount of Questions"
          value={amount}
          onChange={handleChangeAmount}
        />
      </Grid>
      <Grid item xs className={classes.col}>
        <Button component={Link} to="/questionnaire" color="primary" variant="contained">Play</Button>
      </Grid>
    </Grid>
  );
};

export default Preferences;