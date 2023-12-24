import styled from "styled-components";

// CONTAINER
export const Container = styled.main`

  width: 100vw;
  height: 90.8vh;
  /* margin: 10px; */
  /* padding: 5% 3%; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  background-color: #fffffff0;
  background-image: url('/TBD.png'); /* Caminho da imagem corrigido */
  background-size:cover;
  background-repeat:no-repeat;

  h1 {
    font-size: 2.1em;
    color: #ffffff;
    padding-bottom: 10px;
  }
`;

// FORMULARIO
export const ContainerForm = styled.div`
      display: flex;
    align-items: end;
    justify-content: end;
    padding-top:3%;
    width: 70%;
`

export const Form = styled.form`
    width: 60%;
    display: flex;
    justify-content:space-around;
    
    input{
    color: #ffffff;
    padding: 15px;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: rgb(17, 19, 20);
    width: 450px;
    }
`
// BUTTON
export const ButtonSubmit = styled.button`
 background-color: transparent;
 color: #ffffff;
 border: none;
 display: flex;
 justify-content: center;
 align-items: center;
`
// Perfil
export const Perfil = styled.div`
padding: 2%;
  width: 70%;
  height: auto;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 5%;
`
export const ImgPerfil = styled.img`
  border: 1px solid cyan;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`
export const InfPerfil = styled.div`
  width: 450px;
  height: 250px;
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
  padding: 20px;
  border-radius: 4%;
 background: linear-gradient(136deg, rgba(28, 166.58, 197, 0.96) 0%, rgba(28, 166.58, 197, 0) 100%); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 43px;

h2{
  color: #ebebeb;
}
`

export const ContainerButtons =  styled.div`
  display: flex;
  width: 70%;
  height: 100px;
  align-items: center;
  justify-content: space-between;

  &:hover{
    color: blue;
  }
`
export const ListAdd = styled.aside`
width: 30%; height: 100%; background: linear-gradient(175deg, #0A0E0F 0%, black 100%);color:white; padding: 10px;

img{
  width: 40px;
  border-radius:50%;
  padding: 2px;
}
`

export const ContainerRep = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom:1px solid #1d1d1df1;
  margin-bottom:15px;
`

export const ContainerButtonMoreRep = styled.div`
display: flex;
justify-content: space-around;
border-bottom: none;
`