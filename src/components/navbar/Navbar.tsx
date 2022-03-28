import { Link, useParams } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {

  const { userName } = useParams()
  
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/"> Home </Link></li>
        <li><Link to="/login"> Login </Link></li>
        <li><Link to="/profile"> Profile </Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
