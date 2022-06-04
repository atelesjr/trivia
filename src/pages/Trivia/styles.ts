import styled from "styled-components"
import { colors } from "styles/themes"

export const Trivia = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;

  width: 35.5rem;
  height: 35.5rem;
  border: .1rem solid ${ colors.grayDark };
  background-color: ${ colors.gray };
  box-sizing: border-box;
  
  padding: 1.5rem .5rem 1rem;

  font-size: 2rem;

  span {
    display: flex;
    justify-content: center;

    height: 4.8rem;

    font-weight: 400;
    color:  ${ colors.blue };

  }

  p{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    width: 100%;
    
    font-weight: 500;
    line-height: 2.3rem;
    text-align: center;
  }

  .answer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    width: 60%;
    height: 6rem;

    font-weight: 600;
  }

  .next {
    display: flex;
    align-items: flex-end;

    height: 4rem;
    width: 50%;

  }

`