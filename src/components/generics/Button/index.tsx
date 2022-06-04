import * as S from './styles'

interface BurttonProps {
  label: string,
  onClick: () => void
}

const Button = ({label, onClick }: BurttonProps) => {
  return (
    <S.Button onClick={ onClick }>
      { label }
    </S.Button>
  )
}

export default Button