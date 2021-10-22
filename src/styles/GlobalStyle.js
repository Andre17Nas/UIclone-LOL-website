import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 12px;
}

a {
  color: #f9f9f9;
  text-decoration: none;
  font-size: 1rem;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

`;

export default GlobalStyle;