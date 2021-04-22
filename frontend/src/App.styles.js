import styled from "styled-components";

export const AppStyle = styled.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: ${({ theme }) => theme.colors.defaultGrey};
`

export const Header = styled.div`
  color: ${({ theme }) => theme.colors.white}; 
`
