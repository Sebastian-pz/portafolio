import React from 'react';
import { Link } from 'react-scroll';
import devIcon from '../../assets/icon.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__section">
        <Link to="home" smooth={true} duration={500} className="navbar__link">
          <img src={devIcon} alt="Icono de inicio" height="50px" width="50px" />
        </Link>
      </div>
      <div className="navbar__section">
        <Link to="home" smooth={true} duration={500} className="navbar__link">
          Inicio
        </Link>
        <Link to="about" className="navbar__link" smooth={true} duration={500}>
          Acerca de mí
        </Link>
        <Link
          to="projects"
          className="navbar__link"
          smooth={true}
          duration={500}
        >
          Proyectos
        </Link>
        <Link
          to="contact"
          className="navbar__link"
          smooth={true}
          duration={500}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
