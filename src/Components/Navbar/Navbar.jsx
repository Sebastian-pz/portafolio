import React from 'react';
import { Link } from 'react-scroll';
import devIcon from '../../assets/icon.svg';

const Navbar = () => {
  const [showMobile, setShowMobile] = React.useState(false);
  const buttonNav = React.useRef(null);
  const mobileNavMenu = React.useRef(null);

  function shouldShowOrHideNav() {
    if (!showMobile) {
      buttonNav.current.ariaExpanded = 'true';
      buttonNav.current.className = 'navbar-toggler';
      mobileNavMenu.current.className =
        'navbar-collapse collapse show nav-div-mobile';
    } else {
      buttonNav.current.ariaExpanded = 'false';
      buttonNav.current.className = 'navbar-toggler collapsed';
      mobileNavMenu.current.className = 'navbar-collapse collapse';
    }

    setShowMobile(!showMobile);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="home" smooth={true} duration={500} className="navbar-brand">
        <img
          src={devIcon}
          alt="Icono de inicio"
          height="50px"
          width="50px"
          className="nav-icon"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={(e) => shouldShowOrHideNav(e)}
        ref={buttonNav}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNav"
        ref={mobileNavMenu}
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" className="nav-link" smooth={true} duration={500}>
              Acerca de mí
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="home"
              className="nav-link disabled"
              arial-disabled="true"
              smooth={true}
              duration={500}
            >
              Habilidades
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="home"
              className="nav-link disabled"
              arial-disabled="true"
              smooth={true}
              duration={500}
            >
              Publicaciones
            </Link>
          </li> */}
          <li className="nav-item">
            <Link
              to="projects"
              className="nav-link"
              smooth={true}
              duration={500}
            >
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              className="nav-link"
              smooth={true}
              duration={500}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <nav className="navbar">
      <div className="navbar__section --nav__section1">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="navbar__link navbar__linkIcon"
        >
          <img src={devIcon} alt="Icono de inicio" height="50px" width="50px" />
        </Link>
      </div>
      <div className="navbar__section --nav__section2">
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
    </nav> */
}
