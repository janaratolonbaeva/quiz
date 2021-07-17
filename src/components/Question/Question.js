import React from 'react';
import TitleQuestion from "../TitleQuestion/TitleQuestion";
import QuestionnaireItem from "../QuestionnaireItem/QuestionnaireItem";

const Question = ({title, answers, handleClick}) => {
  const A = 'A'.charCodeAt(0);
  const numberToCharacter = number => String.fromCharCode(A + number);

  return (
    <>
      <TitleQuestion title={title}/>
      {answers ? answers.map((item, index) => (
        <QuestionnaireItem
          key={index}
          alphabetLetter={numberToCharacter(index)}
          answerChoice={item}
          handleClick={handleClick}
        />
      )) : null}
    </>
  );
}

export default Question;