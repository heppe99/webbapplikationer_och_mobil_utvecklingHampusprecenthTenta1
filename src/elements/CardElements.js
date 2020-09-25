import styled from "styled-components"

export const CardWrapper = styled.div`
  margin-top: 2rem;
  width: 50%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
  }
`
