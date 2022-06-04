import * as S from './styles'

interface RadioButtonProps {
  label: string
  value: any
  checked: undefined | boolean
  onChange: ((value: any) => void) | null
}

const RadioButton = ({ label, checked, value, onChange }: RadioButtonProps) => {

  return(
    <S.RadioButton checked={ checked === value  }>
      <label>
        { label }
      </label>
      <input 
        type="radio" 
        name={ label } 
        checked={ checked === value }
        value={ value }
        onChange={ () => onChange ? onChange(value): null }
      />
    </S.RadioButton>

  )
}

export default RadioButton