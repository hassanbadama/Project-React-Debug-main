/* eslint-disable no-return-assign */
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "../../components/Logo";


import "./style.scss";

const Menu = () => (
  <nav>
       <Logo />
    <ul>
    <li> 
      <Link  to = "/">Accueil</Link>
     </li>
    <li>
       <Link  to = "/service">Nos service</Link>
      </li>
      <li>
       <Link  to = "/realisateur">Nos réalisations</Link>
      </li>
      <li>
       <Link  to = "/equipe">Notre équipe</Link>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "/contact")}>
      Contact
    </Button>
    {/* <Logo />
    <ul>
      <li>
        <a href="#nos-services">Nos services</a>
      </li>
      <li>
        <a href="#nos-realisations">Nos réalisations</a>
      </li>
      <li>
        <a href="#notre-equipe">Notre équipe</a>
      </li>
    </ul>
    <Button title="contact" onClick={() => (window.document.location.hash = "#contact")}>
      Contact
    </Button> */}
  </nav>
);

export default Menu;
