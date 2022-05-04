import { NavLink } from 'react-router-dom';
import './header.css';


const Header = () => {
  return <header>
    <NavLink to='/' className='head'>Cheesecake Jars</NavLink>
  </header>
}
export default Header;