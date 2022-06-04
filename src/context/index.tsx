import { createContext, ReactNode, useState } from "react";
import { QuestionType } from "services";

interface ProviderProps {
  children: ReactNode
}

export interface answerType {
  questionNumber: number
  question: string
  correct: boolean
}

export interface ContextTypes {
  questions: QuestionType[]
  setQuestions: (state: QuestionType[] ) => void
  page: string
  setPage: (state: string ) => void
  questionNumber: number
  setQuestionNumber: (state: number) => void
  answers: answerType[]
  setAnswers: (state: any) => void
}

const defaultValue = {
  questions: [] as QuestionType [],
  setQuestions: () => {},
  page: 'begin',
  setPage: () => {},
  questionNumber: 0,
  setQuestionNumber: () => {},
  answers: [] as answerType [],
  setAnswers: () => {},
}

export const Context = createContext<ContextTypes>(defaultValue)

export const Provider = ({ children }: ProviderProps ) => {
  const [ questions, setQuestions ] = useState(defaultValue.questions)
  const [ page, setPage ] = useState(defaultValue.page)
  const [ questionNumber, setQuestionNumber ] = useState(defaultValue.questionNumber)
  const [ answers, setAnswers ] = useState(defaultValue.answers)

  return( 
    <Context.Provider value={{ 
      questions, 
      setQuestions,
      page,
      setPage,
      questionNumber,
      setQuestionNumber,
      answers,
      setAnswers
    }}>
      { children }
    </Context.Provider>
  )
}