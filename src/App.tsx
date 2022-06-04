import { useEffect, useContext } from 'react';
import 'styles/global.css'
import * as S from './appStyles'
//services
import { apiGetTrivia } from 'services';
// context
import { Context } from 'context'
// components
import Content from 'pages/layout/Content';
import Header from 'pages/layout/Header';
import Main from 'pages/Main'
import Footer from 'pages/layout/Footer';

function App() {
  const { setQuestions, page, answers } = useContext(Context)

  useEffect(() => {
    const getTrivia = async () => {
      const data = await apiGetTrivia()
      data.length > 0 && setQuestions(data)
    }
  
    answers.length === 0 && getTrivia()
  }, [ setQuestions, answers ])

  return (
    <S.App>
      <Header />
      <Content>
          <Main page={ page } />
          <Footer />
      </Content>
    </S.App>
  );
}

export default App;
