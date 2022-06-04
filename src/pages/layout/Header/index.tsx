import { useContext  } from 'react'
import * as S from './styles'
import { Context, answerType } from 'context'


const Header = () => {
  const { page, questions, questionNumber, answers } = useContext(Context)

  const score = (answers: answerType[]) => {
    const total = answers.reduce(
      (acc: number, answer: answerType) => { 
        if(answer.correct) return  acc + 1 
        return acc
      }
    , 0)

    return total
  }

  const callHeader = (page: string) => ({
    'begin':  <span>Welcome to the Trivia Challenge!</span>,
    'trivia':  <span>{ questions[questionNumber]?.category }</span>,
    'result':  <span>You scored: <span className='score'>{ score(answers) }/10</span></span>
  })[page]

  return (
    <S.Header>
     { callHeader(page) }
    </S.Header>
  )
}

export default Header