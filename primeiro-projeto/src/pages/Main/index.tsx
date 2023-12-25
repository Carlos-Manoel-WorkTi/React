import React, { useCallback, useState } from 'react';
import { Container, Form, ButtonSubmit, Perfil, ImgPerfil, InfPerfil, ContainerForm, ContainerButtons, ListAdd, ContainerButtonMoreRep, ContainerRep } from './style';
import { FaGithub } from "react-icons/fa";
import { AddRep, ButtonMoreRespLeft, ButtonMoreRespRight, ConfigIcon, SetaLeft, SetaRight } from './icons';

import api from '../../services/api';

interface Repositorio {
  login: string;
  name: string;
  img: string;
  total_repo: string;
  stars?: number;
  bio?: string;
}

export default function Home() {
  const [newUser, setNewUser] = useState('');
  const [repos, setRepos] = useState<Repositorio[]>([{login: "github", name: "GitHub", img:'https://avatars.githubusercontent.com/u/9919?v=4', total_repo: '472',bio:" How people build software"}]);
  const [loading, setLoading] = useState<boolean>(false);
  const [reposToShow, setReposToShow] = useState<number>(3); // Inicialmente, mostra 3 repositórios
  const reposLimitToShow = 5; // Limite de repositórios a serem exibidos antes de mostrar os botões "Ver Mais"

  const handleShowMore = () => {
    // Mostrar mais 3 repositórios
    setReposToShow(prev => prev + 3);
  };
  const alterValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    // verifica se tem valor e envia
    e.target.value === '' ? '' : setNewUser(e.target.value);
  };

  const RepSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      if (newUser.trim() === '') {
        alert('Nome de usuário vazio');
        return;
      }
  
      setLoading(true);
  
      try {
        const response = await api.get(`users/${newUser}`);
        const { login, name, avatar_url, public_repos, bio } = response.data;
  
        const userExists = repos.some(repo => repo.name === name);
  
        if (userExists) {
          alert('Usuário já existe na lista de repositórios');
        } else {
          setRepos(prevRepos => [
            {
              login: login,
              name: name,
              img: avatar_url,
              total_repo: public_repos,
              bio: bio,
            },
            ...prevRepos,
          ]);
        }
  
        setNewUser('');
      } catch (error) {
        alert('Erro ao buscar repositório: ' );
      } finally {
        setLoading(false);
      }
    },
    [newUser, repos]
  );
  
  return (
    
    <>
    <Container>
      
      <ContainerForm>
        <FaGithub size={80} />
        <Form onSubmit={RepSubmit}>
          <input onChange={alterValue} value={newUser} type="text" placeholder='Digite seu nome do github' />
          <ButtonSubmit disabled={loading}>
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
              <h5>Bio: {repos[0].bio ? repos[0].bio.slice(0,30) + '...' : ""}</h5> 
              <p>Repositórios: {repos[0].total_repo ? repos[0].total_repo : "0" } </p>
              <p>Stars: {repos[0].stars ? repos[0].stars : 0 }</p>
              <p>Issues</p>
              <p>Forks</p>
            </InfPerfil>
          </>
        }
 <ListAdd>
        {repos.slice(0, reposToShow).map((repo, index) => (
           <ContainerRep key={index}>
          <div>
            <img src={repo.img} alt={`Repository ${repo.name}`} />
            <p>{repo.name ? repo.name : repo.login}</p>
          </div>
            <ConfigIcon/>
          </ContainerRep>
        
        ))}
        {repos.length > reposToShow && reposToShow < reposLimitToShow && (
          <ContainerButtonMoreRep>
            <ButtonMoreRespLeft onClick={handleShowMore} />
            <ButtonMoreRespRight onClick={handleShowMore} />
          </ContainerButtonMoreRep>
        )}
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
