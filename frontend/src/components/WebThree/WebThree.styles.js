import styled from "styled-components";

export const ContainerInnerBlock = styled.div`
  padding: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  input {
    color: ${({ theme }) => theme.colors.black};
  }
`

export const Input = styled.input`
  padding: 10px;  
  margin: 10px 0;
`