import styled from "styled-components";

export const Container = styled.div`
  margin: 16px;
  box-shadow: ${(props) => props.theme.shadows.soft};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1.2rem;
  transition: all .32s ease;
  &:hover{
      transform: scale(1.02)
  }

  h2 {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin-top: 1.2rem;
  }

  span {
    margin: 1.24rem auto;
    font-size: 0.92rem;
    font-weight: 400;
    width: 80%;
  }

  div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 0 1.2rem;

    p {
      font-size: 0.72rem;
      margin: 0.12rem 0.24rem;
      font-weight: 300;
    }
  }
  ul {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    padding-right: .92rem;
    margin-top: .24rem;

    li{
        margin: 0 .24rem;
        
        p{
            display: flex;
            justify-content:center;
            align-items: center;
            font-size: .64rem;
            background-color: ${props => props.theme.colors.primary2};
            color: ${props => props.theme.colors.white1};
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
