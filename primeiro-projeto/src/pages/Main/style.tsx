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
  background-image: url('/TBD.png'); 
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

export const Form = styled.form<{error:number | undefined}>`
  width: 60%;
  display: flex;
  justify-content: space-around;

  input {
    color: #ffffff;
    padding: 15px;
    border: 1px solid ${props => (props.error ? "red" : "transparent")};
    border-radius: 20px;
    background-color: rgb(17, 19, 20);
    width: 450px;
  }
`;


// Perfil
export const Perfil = styled.div`
padding: 2%;
  width: 65%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 5%;
`
export const ImgPerfil = styled.img`
  border: 3px solid #4307ae;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-bottom: -12px;
`

export const ImgAndName = styled.div`
  display: flex;
  justify-content: start;
  gap: 10px;
  align-items: end;
  height: 10px;
  border-radius: 50%;

  h2{
    padding-top: 1px;
  }
`
export const NamePerfil = styled.div`
  height: 50px;
  border-radius: 50%;
`
export const InfPerfil = styled.div`
  width: 450px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.3em;
  padding: 20px;
  border-radius: 4%;
 background: linear-gradient(136deg, rgb(6 3 12),  rgba(28, 166.58, 197, 0) 100%); box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); border-radius: 43px;
 border-bottom-right-radius:0px;
h2{
  color: #ebebeb;
}
h5{
  color: #c9c9c9;
}
p{
  color: white;
  padding: 10px;
}
`

// LINHAS DAS INFORMAÇOES DO PERFIL
export const InfContainer = styled.div`
  height: auto; /* Ajuste a altura conforme necessário */
  border-radius: 50%;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
//  BUTTON

export const ContainerButtons =  styled.div`
  display: flex;
  width: 70%;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  
  &:hover{
    color: blue;
  }
`
export const ListAdd = styled.aside`
width: 30%; max-height: 240px; height:240px;    background: linear-gradient(175deg, #06040b 0%, black 100%);color:white; padding: 10px;

img{
  width: 40px;
  border-radius:50%;
  padding: 2px;
}
div{
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100% ;
}
`

export const ContainerRep = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  border-bottom:1px solid #1d1d1df1;
  margin-bottom:15px;
`

export const ContainerButtonMoreRep = styled.div`
display: flex;
justify-content: space-around;
align-items: end;
margin-top: 10%;
border-bottom: none;
`

// BUTTON PROCURAR USUARIO

interface ButtonSubmitProps {
  $ValorDisabled?: boolean; // Adicione a propriedade que deseja utilizar
}

export const ButtonSubmit = styled.button<ButtonSubmitProps>`
  background-color: transparent;
  color: #ffffff;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    opacity: 0.7; /* Define uma opacidade quando o botão estiver desativado */
    cursor: not-allowed; /* Altera o cursor quando o botão estiver desativado */
  }

  svg {
    border-radius: 50%;
    color: ${props => (props.$ValorDisabled ? 'purple' : 'white')};
  }
`;


