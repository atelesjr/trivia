import { useContext } from "react";
import * as S from './styles'
import { Context } from "context";
import Correct from 'assets/correct.svg'
import Wrong from 'assets/wrong.svg'


const Score = () => {
  const { answers } =  useContext(Context)

  return (
  <S.Score>
    <div className="answers">
      {
        answers?.map( answer => (
          <S.Answer 
            key={answer.questionNumber}
            correct={answer.correct}
          >
            <div className="correct">
              { 
                answer.correct === true 
                ? <img src={ Correct } alt="Correct" className="right" />
                : <img src={ Wrong } alt="Wrong"  className="wrong"/>
              }
            </div>
            <div className="questions">
              <div className="number">
                { answer.questionNumber + 1}
              </div>
              <div className="question">
                { answer.question }
              </div>
            </div>
          </S.Answer>
        ))
      }
    </div>
  </S.Score>
  )
}

export default Score;