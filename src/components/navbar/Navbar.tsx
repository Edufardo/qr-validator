import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/"> Home </a></li>
        <li><a href="/login"> Login </a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
