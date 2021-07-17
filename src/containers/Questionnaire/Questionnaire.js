import React, {useEffect, useState} from 'react';
import {Button, Grid} from "@material-ui/core";
import SliderQuestions from "../../components/SliderQuestions/SliderQuestions";
import {useDispatch, useSelector} from "react-redux";
import {changeIndexTest, changeScore, fetchQuestionsRequest} from "../../store/actions/questionsAction";
import Question from "../../components/Question/Question";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
  buttonWrap: {
    textAlign: 'center'
  }
});

const Questionnaire = () => {
  const dispatch = useDispatch();
  const category = useSelector(state => state.preferences.category);
  const difficulty = useSelector(state => state.preferences.difficulty);
  const type = useSelector(state => state.preferences.type);
  const amount = useSelector(state => state.preferences.amount);
  const questions = useSelector(state => state.questions.questions);
  const indexQuestion = useSelector(state => state.questions.indexTest);
  const loadingIndex = useSelector(state => state.questions.indexTestLoading);
  const [answers, setAnswers] = useState(null);
  const questionItem = questions[indexQuestion];
  const correctAnswer = questionItem && questionItem.correct_answer;
  const [result, setResult] = useState(false);
  const classes = useStyle();

  useEffect(() => {
    let url = `https://opentdb.com/api.php?amount=${amount}`;

    if (category) {
      url = url.concat(`&category=${category}`);
    }

    if (difficulty) {
      url = url.concat(`&difficulty=${difficulty}`);
    }

    if (type) {
      url = url.concat(`&type=${type}`);
    }

    dispatch(fetchQuestionsRequest(url));
  }, [dispatch]);


  useEffect(() => {
    if (!questionItem) return;

    let answerItems = [...questionItem.incorrect_answers];

    answerItems.push(questionItem.correct_answer);
    answerItems = answerItems.sort(() => Math.random() - 0.5);

    setAnswers(answerItems);
  }, [questionItem]);

  let button = null;

  if (result === true) {
    button = (
      <Grid item container justify="center" className={classes.buttonWrap}>
        <Button component={Link} variant="contained" color="primary" to="/result">
          Show Result
        </Button>
      </Grid>
    );
  }

  const handleClickAnswerItem = (e) => {
    if (e.target.textContent === correctAnswer) {
      dispatch(changeScore(questionItem.difficulty));
    }

    if (indexQuestion < questions.length) {
      const index = indexQuestion + 1;
      dispatch(changeIndexTest(index));
    }

    if (indexQuestion === questions.length - 1) {
      setResult(true);
    }
  }

  let question = (
    questionItem && (<Question
      title={questionItem.question}
      answers={answers}
      handleClick={handleClickAnswerItem}
    />)
  );

  if (loadingIndex) {
    question = null;
  }

  return (
    <Grid item container direction="column" xs={12}>
      <SliderQuestions value={indexQuestion ? indexQuestion : null}
                       questionsLength= {questions ? questions.length : null}
      />
      {question}
      {button}
    </Grid>
  );
}

export default Questionnaire;