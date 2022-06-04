import styled from "styled-components";
import { colors } from "styles/themes";

export const Button = styled.button`
  width: 100%;
  padding: .5em 0;
  border-radius: .5rem;

  background-color: ${ colors.blue };
  border: .1rem solid ${ colors.blue };
  cursor: pointer;
  transition: all .3s ease-in-out;

  color: ${ colors.white };
  font-size: 1.6rem;

  &:hover {
    background-color: ${ colors.blueLight };
  }

  



`