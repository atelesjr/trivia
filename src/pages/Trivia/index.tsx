import {useEffect, useContext, useState } from "react";
import * as S from './styles'
import { Context, answerType } from 'context'
import RadioButton from "components/generics/RadioButton";
import Button from "components/generics/Button";

const Trivia = () => {
  const { 
    questions, 
    questionNumber, 
    setQuestionNumber,
    setAnswers,
    setPage 
  } = useContext(Context)
  const totalQuestions = questions.length -1
  const [ selected, setSelected ] = useState<undefined | boolean>(undefined)
  const [ question, setQuestion ] = useState('')

  useEffect(() => {
    const question = (questions?.[questionNumber]?.question)
    .replaceAll('&#039;' ,'\'')
    .replaceAll('&quot;' ,'"')

    setQuestion(question)

  }, [questionNumber, questions])

  const handleRadioButton = (value: boolean) => {
    setSelected(value)
  }

  const handleNextQuestion = (questionNumber: number) => { 
    const correctAnswer = JSON.parse(questions[questionNumber]?.correct_answer.toLowerCase())
  
    const answer  = { 
      questionNumber: questionNumber, 
      question,
      correct: selected === correctAnswer 
    }

    setAnswers((state:answerType[]) => [ ...state,  answer ] )
    setSelected(undefined)
    questionNumber < totalQuestions ? setQuestionNumber(questionNumber + 1) : setPage('result')
  }
  
  return( 
    <S.Trivia>
      <span>{`${questionNumber+1} of 10`}</span>
      <p>
        {`${ question }`}
      </p>
      <div className="answer">
        <div className="radio">
         <RadioButton 
          label={'True'} 
          value={ true } 
          checked={ selected } 
          onChange={ handleRadioButton }
        />
        </div>
        <div className="radi">
          <RadioButton 
            label={'False'}  
            value={ false } 
            checked={ selected } 
            onChange={ handleRadioButton } 
          />
        </div>
      </div>
      <div className="next">
        {
          selected !== undefined && (
            <Button 
              label="Next" 
              onClick={ () => handleNextQuestion(questionNumber) } 
            />
          )
        }
      </div>
    </S.Trivia>
  )
}

export default Trivia;