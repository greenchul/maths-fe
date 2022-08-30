import "../styles/navbar.css";
import logo from "../assets/Timeout-logo.png";
const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div>
        <ul>
          <li>
            <img src={logo} alt="logo" className="navbar-logo" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
