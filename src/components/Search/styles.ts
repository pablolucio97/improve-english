import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 56px;
  padding: 0.88rem;
  margin-top: .8rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 256px;
    height: 56px;
    padding: 0.88rem;
    margin: 3.2rem;
    box-shadow: ${(props) => props.theme.shadows.soft};
    background: ${(props) => props.theme.colors.white4};
  }

  input {
    height: 32px;
    background: ${(props) => props.theme.colors.white3};
    border: none;
    outline: 1px solid ${(props) => props.theme.colors.gray4};
    padding-left: 0.48rem;
  }

  button {
    background: ${(props) => props.theme.colors.secondary2};
    height: 32px;
    box-shadow: ${(props) => props.theme.shadows.soft};
    width: 32px;
  }
`;
