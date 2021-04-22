import styled from "styled-components";
import { breakpoint } from "./../styles/BreakPoint";

export const WebStyle = styled.div`
  text-align: center;
  font-size: calc(10px + 2vmin);
  position: relative;
`

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.white};
`

export const Content = styled.div`
  font-size: 18px;
`

export const Heading = styled.h1`
  font-size: 16px;
  padding: 30px 0 10px;
  ${breakpoint.md`
    font-size: 22px;
  `}
`

export const Button = styled.button`
  padding: 10px;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.white};
  @media (hover: hover) and (pointer: fine) {
    &:not([disabled]):hover,
    &:not([disabled]):focus {
      background-color: grey;
      color: ${({ theme }) => theme.colors.black};
    }
  }
  &:disabled {
    opacity: 0.1;
  }
`

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.black};
`

export const NoData = styled.div`
  color: ${({ theme }) => theme.colors.red};
`

export const ContentDataBlock = styled.div`
  padding: 30px 0;
`

export const ContentDataText = styled.div`
  font-size: 18px;
`