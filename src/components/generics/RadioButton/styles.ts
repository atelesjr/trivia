import styled from "styled-components"
import { colors } from "styles/themes"

interface RadioButtonProps {
  checked: undefined | boolean
}

export const RadioButton = styled.div<RadioButtonProps>`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  width: auto;

  label {
    margin-bottom: 1rem;

    font-size: 2rem;
    color: ${ 
      ({checked }) => checked 
      ? `${ colors.blue }`
      : `${ colors.grayDark }`
    };
  }

  input {
    position: relative;

    height: 2rem;
    width: 2rem;
    border: 1px solid green;
    border-radius: 50%;
    outline: none;

    &::after {
      display: block;

      position: absolute;
      top:52%;
      left: 52%;

      content: "";
      height: 1.2rem;
      width: 1.2rem;
      border-radius: 50%;
      transform: translate(-55%, -51%);
      background-color: ${ colors.blue };
      opacity: 0;
      transition: opacity .2s ease;
    }

    &:checked {
      &::after {
        opacity: ${ ({checked}) => 
          checked !== undefined ? 1 :0
        };
      }
    }
  }

  &:hover {
    label {
      color: ${ colors.blue };
    }

    input {
      &:hover {
        border: .2rem solid  ${ colors.blueLight };
      }
    }
  }

`