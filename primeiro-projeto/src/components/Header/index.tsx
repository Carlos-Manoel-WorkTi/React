
import { Link } from 'react-router-dom'
import {Heade, Logo} from './style'
export default function Header() {
  return (
    <Heade>
      <Logo>Encontre seu GitHub</Logo>
      <ul>
        <li> <Link to={"/home"}>Inicio</Link> </li>
        <li><Link to={"/sobre"}>Login</Link></li>
      </ul>
   
    </Heade>

  )
}
