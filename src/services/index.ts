import axios from "axios"

const apiTrivia = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

export interface QuestionType {
  category: string
  correct_answer: string
  difficulty: string 
  incorrect_answers: string []
  question: string
  type: string
}

export const apiGetTrivia = async (): Promise<QuestionType[]> => {
  const data =  await axios.get(apiTrivia)
  .then( res => res.data.results )
  .catch( err => err )

  return data
 
}