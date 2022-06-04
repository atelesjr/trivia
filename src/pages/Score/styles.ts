import styled from "styled-components";
import { colors, screens } from "styles/themes";

export const Score = styled.div`
  display: flex;

  width: 100%;
  box-sizing: content-box;
  background-color: ${ colors.gray };
`

interface AnswerProps {
  correct: boolean
}

export const Answer = styled.div<AnswerProps>`
  display: flex;

  width: 100%;
  border-bottom: .3rem solid white;

  .correct {
    display: flex;
    justify-content: center;

    width: 3rem;
    border-right: .2rem solid white;
    padding: 1rem .5rem;
    background-color: ${
      ({ correct }) => correct 
      ? `${ colors.green }`
      : `${ colors.red }`
    };

    .right{
      width: 1.2rem;
    }

    .wrong{
      width: 1rem;
    }
  }

  .questions {
    display: flex;

    width: calc(100% - 3rem);
    padding: .5rem;

    .number{
      display: flex;
      justify-content: flex-start;
      
      width: 1.8rem;

      font-size: 1.3rem;
      font-weight: 500;
    }

    .question {
      width: calc( 100% - 1.8rem);
    }
  }

  @media ${screens.tablet} {
    font-size: 1.7rem;

    .correct {
      width: 4.5rem;
    }

    .questions {
      .number{
        width: 2.3rem;

        font-size: 1.6rem;
        font-weight: 400;
      }

      .question {
        width: calc( 100% - 2.3rem);
      }
    }
  }
`
