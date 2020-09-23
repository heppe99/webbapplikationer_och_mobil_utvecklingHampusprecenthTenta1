import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 2 / span 11;
  grid-row: 1 / 2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    height: 90px;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
  @media ${props => props.theme.breakpoints.mobile} {  
    flex-direction: column;
    grid-row: 1 / 5;
  }
`
