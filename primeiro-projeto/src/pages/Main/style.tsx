import styled from "styled-components";

// CONTAINER
export const Container = styled.main`
width:600px;
height: 500px;
margin: 10px;
padding: 5% 3%;
display: flex;
flex-direction: column;
justify-content: start;
align-items: start;
gap: 10px;
background-color: #fffffff0;

h1{
font-size: 2.1em;
color: black;
padding-bottom: 10px;
}
`
// FORMULARIO
export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content:space-between;
    gap: 10px;

    input{
    color: black;
    padding: 5px;
    border: none;
    border-bottom: 1px solid black;
    background-color: transparent;
    width: 450px;
    }
`
// BUTTON
export const ButtonSubmit = styled.button`
 background-color: transparent;
 color: black;
 border: none;
 display: flex;
 justify-content: center;
 align-items: center;
`