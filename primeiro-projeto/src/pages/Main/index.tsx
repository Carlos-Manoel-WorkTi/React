import React, { useCallback, useEffect, useState } from "react";
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

interface Repositorio {
  login: string;
  name: string;
  img: string;
  total_repo: string;
  stars?: number;
  bio?: string;
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
          },
        ];
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [isAlert, setIsAlert] = useState<boolean>(false);
  const [valorPrev, setValorPrev] = useState<number>(0);
  const [valorNext, setValorNext] = useState<number>(4);

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
        const { login, name, avatar_url, public_repos, bio } = response.data;

        setRepos((prevRepos) => [
          {
            login: login,
            name: name,
            img: avatar_url,
            total_repo: public_repos,
            bio: bio,
          },
          ...prevRepos,
        ]);
        setNewUser("");
      } catch (error) {
        setIsAlert(true);
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
                    <p>Issues</p>
                  </div>
                  <div>
                    <p>Issues</p>

                    <p>Forks</p>
                  </div>
                </InfContainer>
              </InfPerfil>
            </>
          )}
          <ListAdd>
            {repos.slice(valorPrev, valorNext).map((valor, index) => (
              <ContainerRep key={index}>
                <div>
                  <img src={valor.img} alt={`Repository ${valor.name}`} />
                  <p>{valor.name ? valor.name : valor.login}</p>
                </div>
                <ConfigIcon />
              </ContainerRep>
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
