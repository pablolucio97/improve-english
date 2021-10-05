import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    body{
        background: ${props => props.theme.colors.white1};
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

`


export default GlobalStyles
