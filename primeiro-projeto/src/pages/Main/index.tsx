import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Container,
  Form,
  ButtonSubmit,
  Perfil,
  ImgPerfil,
  InfPerfil,
  ContainerForm,
  ContainerButtons,
  ListAdd,
  ContainerButtonMoreRep,
  ContainerRep,
  ImgAndName,
  NamePerfil,
  InfContainer,
  Edit,
} from "./style";
import { FaGithub } from "react-icons/fa";
import {
  AddRep,
  ButtonMoreRespLeft,
  ButtonMoreRespRight,
  ConfigIcon,
  SetaLeft,
  SetaRight,
} from "./icons";


import api from "../../services/api";
import { ShowerRepOpt, Usuario,Ok } from "./style";
import { Save,Cancel } from "./icons";
import { Link } from "react-router-dom";

interface Repositorio {
  login: string;
  name: string;
  img: string;
  total_repo?: string;
  stars?: number;
  bio?: string;
  issues?: string;
  seguidores: number;
  seguindo: number;
}
// CLASSES

export default function Home() {
  const [newUser, setNewUser] = useState("");
  const [repos, setRepos] = useState<Repositorio[]>(() => {
    const storedRepos = localStorage.getItem("Repositorios");
    return storedRepos
      ? JSON.parse(storedRepos)
      : [
          {
            login: "github",
            name: "GitHub",
            img: "https://avatars.githubusercontent.com/u/9919?v=4",
            total_repo: "472",
            bio: " How people build software",
            issues: 0,
            seguidores:0,
            seguindo: 0
          },
        ];
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const [valorPrev, setValorPrev] = useState<number>(0);
  const [valorNext, setValorNext] = useState<number>(4);
  // const [Add, setAdd] = useState<boolean>(false);
  const [confirmRep, setConfirmRep] = useState<Repositorio[]  | null>()

  const meuElementoRef = useRef(null);


  const handleMostrarMais = () => {
    if (valorNext < repos.length) {
      setValorPrev((prev) => prev + 4);
      setValorNext((prev) => prev + 4);
    }
  };

  const handleMostrarMenos = () => {
    if (valorPrev > 0) {
      setValorPrev((prev) => Math.max(prev - 4, 0));
      setValorNext((prev) => Math.max(prev - 4, 4));
    }
  };
   
  const alterValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAlert(false);
    setNewUser(e.target.value);
  };
 
  const handleAddUser = () => {
    if (confirmRep) {
      setRepos((prevRepos) => [...confirmRep, ...prevRepos]);
      setNewUser("");
      setConfirmRep(null);
    }
  };

  const handleCancelAdd = () => {
    setConfirmRep(null);
  };
  // UPDATE
  useEffect(() => {
    localStorage.setItem("Repositorios", JSON.stringify(repos));
  }, [repos]);

  const RepSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        setLoading(true);

        if (newUser.trim() === "") {
          throw new Error("Campo vazio");
        }

        const userAlreadyExists = repos.some(
          (repo) => repo.login.toLowerCase() === newUser.toLowerCase()
        );

        if (userAlreadyExists) {
          throw new Error("Usuário já existe na lista");
        }
        
        const response = await api.get(`users/${newUser}`);  
        const response2 = await api.get(`users/${newUser}/followers`);    
        const response3 = await api.get(`users/${newUser}/following`); 
        const { login, name, avatar_url, public_repos, bio } = response.data;
        const followers = response2.data;
        const following = response3.data;

        
        setConfirmRep([{login: login, name: name, img: avatar_url, total_repo:public_repos, bio:bio, seguidores: followers.length, seguindo: following.length}])
        
     


     
      } catch (error) {
        setIsAlert(true);
      } finally {
        setLoading(false);
      }
    },
    [newUser, repos ]
  );

  return (
    <>
      <Container >
        <ContainerForm>
          <FaGithub size={80} />
          <Form onSubmit={RepSubmit} error={isAlert ? 1 : 0}>
            <input
              onChange={alterValue}
              value={newUser}
              type="text"
              placeholder="Digite seu nome do github"
            />
            <ButtonSubmit disabled={loading}>
              <AddRep size={30} />
            </ButtonSubmit>
            { confirmRep &&
              <ShowerRepOpt>
                <Usuario>
                    <img src={confirmRep[0].img} alt="perfil" />
                    <h4>{confirmRep[0].name ? confirmRep[0].name : confirmRep[0].login}</h4>
                </Usuario>
                <Ok>
                  <Cancel onClick={handleCancelAdd}/>
                  <Save onClick={handleAddUser} />
                </Ok>
              </ShowerRepOpt>
            }
          </Form>
        </ContainerForm>
        <Perfil>
          {repos.length > 0 && (
            <>
              <InfPerfil>
                <ImgAndName>
                  <ImgPerfil src={repos[0].img} alt="Foto do perfil" />
                  <NamePerfil>
                    <h2>{repos[0].name ? repos[0].name : repos[0].login}</h2>
                    <h5>
                      Bio:{" "}
                      {repos[0].bio ? repos[0].bio.slice(0, 30) + "..." : ""}
                    </h5>
                  </NamePerfil>
                </ImgAndName>
                <InfContainer>
                  <div>
                    <p>
                      Repositórios:{" "}
                      {repos[0].total_repo ? repos[0].total_repo : "0"}{" "}
                    </p>
                    <p>Stars: {repos[0].stars ? repos[0].stars : 0}</p>
                    <p>Seguidores: {repos[0].seguidores ? repos[0].seguidores : 0}</p>
                  </div>
                  <div>
                    <p>Issues</p>
                    <p>Forks</p>
                    <p>Seguindo: {repos[0].seguidores ? repos[0].seguidores : 0}</p>
                  </div>
                </InfContainer>
              </InfPerfil>
            </>
          )}
          <ListAdd>
            {repos.slice(valorPrev, valorNext).map((valor, index) => (
                <Link to={"#"} key={index}>
              <ContainerRep ref={meuElementoRef}>
                <div>
                  <img src={valor.img} alt={`Repository ${valor.name}`} />
                  <p>{valor.name ? valor.name : valor.login}</p>
                </div>
                <ConfigIcon onClick={()=>{
                 console.log(meuElementoRef.current);
                 return (
                    <Edit>cl</Edit>
                 )
                  
                }}/>
              </ContainerRep>
                </Link>
            ))}

            {repos.length > 4 && (
              <ContainerButtonMoreRep>
                <ButtonMoreRespLeft onClick={handleMostrarMenos} />
                {valorPrev >= 0 && (
                  <ButtonMoreRespRight onClick={handleMostrarMais} />
                )}
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
