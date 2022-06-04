import { useContext } from 'react'
import * as S from './styles'
import Button from "components/generics/Button"
//context
import { Context, ContextTypes } from 'context'

const Footer = () => {
  const { 
    setPage, 
    page, 
    setQuestionNumber, 
    setAnswers 
  } = useContext<ContextTypes>(Context)

  const reset = () => {
    setQuestionNumber(0)
    setAnswers([])
    setPage('begin')
  }

  return (
    <S.Footer>
      <div className='button'>    
      {
        page !== 'trivia' 
        ? (
          <Button 
            label={  
              page === 'begin' ? 'Begin' : 'PLAY AGAIN?'
            } 
            onClick={ () => { 
              page === 'begin'
              ? setPage('trivia')
              : reset()
            }} 
          />
        )
        : ''
      }
     </div>
    </S.Footer>
  )
}

export default Footer