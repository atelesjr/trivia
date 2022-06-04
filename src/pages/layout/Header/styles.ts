import styled from 'styled-components'
import { colors, screens } from 'styles/themes'

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5rem;
  width: 100%;
  background-color: ${ colors.blue };

  span {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${ colors.white };

    .score {
      color: ${ colors.yellow }
    }

  }

  @media ${screens.tablet} {
    span{
      font-size: 2rem;
    }
   
  }

`