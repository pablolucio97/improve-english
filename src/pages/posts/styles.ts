import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  article {
    margin: 3.2rem auto;
    width: 900px;
    padding: 1.2rem;

    h2 {
      margin: 1.2rem 0;
    }

    span {
      display: inline-block;
      margin: 1.2rem 0;
      text-indent: 32px;
      font-weight: 300;
      text-align: justify;
      line-height: 22px;
    }

    div {
      display: flex;
      justify-content: flex-end;
      padding: 1.2rem;

      p {
        margin-right: 0.72rem;
        font-weight: 300;
        color: ${(props) => props.theme.colors.gray2};
      }
    }

    ul {
      display: flex;
      justify-content: flex-end;
      padding-right: 1.2rem;

      li {
        margin: 0.48rem;
      }
    }
  }
`;
