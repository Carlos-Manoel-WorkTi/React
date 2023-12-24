
import { Link } from 'react-router-dom'
import {Heade} from './style'
export default function Header() {
  return (
    <Heade>
      <h1>Meus repositórios</h1>
      <ul>
        <li> <Link to={"/home"}>Home</Link> </li>
        <li><Link to={"/sobre"}>Sobre</Link></li>
      </ul>
   
    </Heade>

  )
}
