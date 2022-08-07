import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${({theme}) => theme.text};
        font-family: 'Roboto', sans-serif;
    }

    html, body, #root {
        max-width: 100vw;
        max-height: 100vh;

        width: 100%;
        height: 100%;
    }

    html {
        background: ${({theme}) => theme.body}
    }

    :root {
    --primary: #000;
    --secondary: #15181C;
    --white: #D9D9D9;
    --gray: #7A7A7A;
  }
`;


export const Switcher = styled.img`
  width: 23px;
  height: 23px;
  position: absolute;
  right: 27px;
  top: 27px;
  cursor: pointer;
  z-index: 999;
`;