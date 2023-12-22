import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
    -webkit-font-smoothing: antialiased !important;
    box-sizing: border-box;
    outline: none;
  }



  button{
    cursor: pointer;
  }
`;

export const Container = styled.div`
 padding: 0;
 margin: 0;
 background-color: #262626;
 height: 100vh;
 display: flex;
 justify-content: center;
`