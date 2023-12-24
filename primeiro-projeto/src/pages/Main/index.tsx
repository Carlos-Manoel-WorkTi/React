import React, { useCallback, useState } from 'react';
import { Container, Form, ButtonSubmit, Perfil, ImgPerfil, InfPerfil, ContainerForm, ContainerButtons, ListAdd, ContainerButtonMoreRep, ContainerRep } from './style';
import { FaGithub } from "react-icons/fa";
import { AddRep, ButtonMoreRespLeft, ButtonMoreRespRight, SetaLeft, SetaRight } from './icons';

import api from '../../services/api';

interface Repositorio {
  login: string;
  name: string;
  img: string;
}

export default function Home() {
  const [newUser, setnewUser] = useState('');
  const [repos, setRepos] = useState<Repositorio[]>([{login: "github", name: "Github", img:'https://avatars.githubusercontent.com/u/9919?v=4'}]);
 
  
  const alterValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value === '' ? '' : setnewUser(e.target.value);
  }

  const RepSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      
      const response = await api.get(`users/${newUser}`);
      const { login,name, avatar_url } = response.data;
      setRepos(prevRepos => [
        {
          login: login,
          name: name,
          img: avatar_url
        },...prevRepos
      ]);
      setnewUser('')
     
      
    } catch (error) {
      newUser === '' ? '' : alert("Erro ao buscar repositório");
     
    }

  }, [newUser]);
   
  return ( <>

    <Container>
      
      <ContainerForm>
        <FaGithub size={80} />
        <Form onSubmit={RepSubmit}>
          <input onChange={alterValue} value={newUser} type="text" placeholder='Digite seu nome do github' />
          <ButtonSubmit type="submit">
            <AddRep size={30} />
          </ButtonSubmit>
        </Form>
      </ContainerForm>
      <Perfil>
        {repos.length > 0 &&
          <>
            <ImgPerfil src={repos[0].img} alt="Foto do perfil" />
            <InfPerfil>
              
            <h2>{repos[0].name ? repos[0].name : repos[0].login }</h2>
              <p> </p>
              <p></p>
              <p></p> 
              <span></span>
            </InfPerfil>
          </>
        }
        <ListAdd>
  {repos.map((repo, index) => (
    index < 3 &&
    <ContainerRep key={index}>
        <img src={repo.img} alt={`Repository ${repo.name}`} />
        <p>{repo.name ? repo.name : repo.login}</p>
    </ContainerRep>
  
  ))}
    {repos.length > 3 && 
       
       <ContainerButtonMoreRep>
        <ButtonMoreRespLeft/>
        <ButtonMoreRespRight/>
       </ContainerButtonMoreRep>
    }
</ListAdd>

      </Perfil>
      <ContainerButtons>
        <SetaLeft />
        <SetaRight />
      </ContainerButtons>

    </Container>
      
    </>
  );
}
