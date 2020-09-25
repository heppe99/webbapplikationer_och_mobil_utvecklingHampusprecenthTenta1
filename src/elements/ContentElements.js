import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 2 / span 12;
  grid-row: 4 / span 5;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
  background-color: ${props => props.theme.colors.dark1};
  padding: ${props =>
    `${props.theme.spacings.xLarge} ${props.theme.spacings.xxLarge}`};
  box-shadow: ${props => props.theme.shadows.shadow1};
  z-index: 10;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;

  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: ${props =>
      `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    flex-direction: column; 
  }
`
