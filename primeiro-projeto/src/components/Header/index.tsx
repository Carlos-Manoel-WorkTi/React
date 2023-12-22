
import { Link } from 'react-router-dom'
import {Hea} from './style'
export default function Header() {
  return (
    <Hea>
      <h1>logo</h1>
      <ul>
        <li> <Link to={"/home"}>Home</Link> </li>
        <li><Link to={"/sobre"}>Sobre</Link></li>
      </ul>
   
    </Hea>

  )
}
