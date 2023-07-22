import { createGlobalStyle } from "styled-components";
import { Open_Sans } from "next/font/google";

const OpenSans = Open_Sans({ subsets: ["latin"] });

const GlobalStyle = createGlobalStyle`
  *,*::after,*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #303030;
    color: white;
    ${() => OpenSans.style};
  }
`;

export default GlobalStyle;
