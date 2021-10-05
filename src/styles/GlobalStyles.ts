import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    @media(max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

    html{
        scroll-behavior: smooth;

    }

    body{
        background: ${(props) => props.theme.colors.white1};
        overflow-x: hidden;
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2px;
        cursor: pointer;
        border: none;
        outline: none;
        padding: .4rem;
    }


    button[disabled]{
        cursor: not-allowed;
        filter: brightness(.88);
    }

    ul, ol, li, a{
        list-style: none;
        text-decoration: none;
    }

`;

export default GlobalStyles;
