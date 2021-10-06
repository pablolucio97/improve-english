import styled from "styled-components";

export const Container = styled.div`
  width: 240px;
  height: 240px;
  margin: 16px;
  box-shadow: ${(props) => props.theme.shadows.soft};
  border: 1px solid cyan;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  padding: 1.2rem;
  transition: all .32s ease;
  &:hover{
      transform: scale(1.02)
  }

  h2 {
    font-size: .92rem;
    font-weight: 600;
  }

  span {
    margin: 1.2rem auto;
    font-size: 0.8rem;
    font-weight: 400;
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 0 1.2rem;

    p {
      font-size: 0.8rem;
      margin:  0.24rem;
      font-weight: 300;
    }
  }
  ul {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: 2rem;
    margin-top: 1.2rem;

    li{
        margin: 0 .24rem;
        
        p{
            display: flex;
            justify-content:center;
            align-items: center;
            font-size: .64rem;
            background-color: ${props => props.theme.colors.warningText};
            width: 22px;
            height: 22px;
            border-radius: 50%;
            padding: .24rem;
            text-align: center;
            font-weight: 700;
        }

    }
  }
`;
