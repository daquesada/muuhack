import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
html{
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
  *:before, *after{
    box-sizing: inherit;
  }
  ul,li,h1,h2,h3,p,button{
    margin:0;
    padding:0;
  }
  ul{
    list-style:none;
  }
  button{
    background:transparent;
    border:0;
    outline:0;
  }
  
  body{
    height: 100vh;
    margin:0 auto;
    overscroll-behavior:none;
    width: 100%;
    background:#fefefe;
    background-position: 0 0, 25px 10px;
    background-size: 50px 50px;
    background-image:
      radial-gradient( #ff3b3b 1px, transparent 1px), radial-gradient( #4cff16 1px, transparent 1px), radial-gradient(#fa983a 1px, transparent 1px);
  }
  ::-webkit-scrollbar{
    display:none;
  }
`