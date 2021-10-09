import styled from "styled-components";

export const Container = styled.div`
  & .noFoundPosts {
    display: flex;
    justify-content: center;
    span{
      font-size: 1.2rem;
      text-align: center;
      color: ${props => props.theme.colors.gray2}
    }
  }

  & .filterContainer {
    display: flex !important;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 0.8rem;
    width: 100%;

    button {
      margin: 1.2rem 0.92rem;
    }

    strong {
      font-size: 0.72rem;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    margin: 1.2rem auto;
    justify-content: flex-start;
    align-items: center;
    width: 900px;
    margin-bottom: 4.8rem;

    h1 {
      font-size: 2.4rem;
      margin: 1.2rem auto;
      font-weight: 700;
    }

    div {
      display: flex;
      width: 100%;
      flex-wrap: wrap;
    }
  }
`;
