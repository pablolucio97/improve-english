import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 56px;
  padding: 0.4rem;
  background: ${(props) => props.theme.colors.primary2};

  img {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin-right: 1.2rem;
  }

  h1 {
      color: ${(props) => props.theme.colors.white1};
      font-size: 1.6rem;
  }
`;
