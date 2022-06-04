import * as S from './styles'

import Begin from 'pages/Begin'
import Trivia from 'pages/Trivia';
import Score from 'pages/Score/index.';

interface MainProps {
  page: string
}

const Main = ({ page }: MainProps) => {

  const callPage = (page: string) => ({
    'begin':  <Begin />,
    'trivia': <Trivia />,
    'result': <Score />
  })[page]

  return( 
  <S.Main>
    { callPage(page) }
  </S.Main> 
  )
 

}

export default Main