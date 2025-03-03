import { createGlobalStyle } from "styled-components";
import { palette } from "./palette";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body{
        font-family: 'SF Pro Display', sans-serif;
        background-color: ${palette.mainBackground};
        color: ${palette.textColor};
        height: 100%;
        min-height: 100vh;
        margin: 0;
    }

    html{
        height: 100%;
        width: 100%;
    }
    
    ul {
        margin: 0;
        padding: 0;
    }

    h1, h2, h3, h4, p{
        margin: 0;
    }

`