import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

  html {
    box-sizing: border-box;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    font-size: 1rem;
    color: #3c3c3c;
  }
  
  a, button {
    font-family: 'Montserrat', sans-serif;
    color: #3c3c3c;
  }
`
