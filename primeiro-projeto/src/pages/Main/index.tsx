import React, { useState } from 'react';
import {Container, Form, ButtonSubmit} from './style'
import { FaGithub } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import api from '../../services/api'

export default function Home() {
  const [newRep,setNewRep] = useState('')


  async function RepSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
try{
    const response = await api.get(`repos/${newRep}`)
       console.log(response.data);
} catch(error){ alert("dont find")}     
  }
 function alterValue(e: React.ChangeEvent<HTMLInputElement>){
   setNewRep(e.target.value)
 }
  return (

  <Container>

    <FaGithub size={80}/>

    <h1>Meus repositorios</h1>

    <Form onSubmit={RepSubmit}>
      <input onChange={alterValue} value={newRep} type="text" placeholder='Digite seu repositorio' />
    
      <ButtonSubmit>
      <IoIosAddCircleOutline size={30} />
      </ButtonSubmit>
    </Form>

  </Container>
  )
}
