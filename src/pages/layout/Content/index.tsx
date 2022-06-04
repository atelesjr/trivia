import { ReactNode } from 'react'
import * as S from './stylies'

interface ContentProps {
  children: ReactNode
}

const Content = ({ children }:ContentProps) => {
  return (
    <S.Content>
      { children }
    </S.Content>
  )
}

export default Content