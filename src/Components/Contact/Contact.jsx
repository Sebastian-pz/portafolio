import React from 'react';
import LinkedInIcon from '../../assets/linkedin.svg';
import GitHubIcon from '../../assets/github.svg';
import GmailIcon from '../../assets/gmail.svg';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__introduction">
          <h2>¡Contáctame!</h2>
          <p>
            Si te interesa mi perfil y tienes algún proyecto en el cual pueda
            aportar contactame
          </p>
        </div>
        <form
          action="https://formspree.io/f/mgebyvez"
          method="POST"
          className="contact__form"
        >
          <label>Tu correo</label>
          <input type="email" name="email" placeholder="Tu correo" required />
          <label>Mensaje</label>
          <textarea name="message" placeholder="Tu mensaje" required />
          <button type="submit" className="contact__button">
            Enviar
          </button>
        </form>
        <div className="contact__socialContainer">
          <a
            href="https://github.com/Sebastian-pz"
            className="contact__social"
            target="__blank"
          >
            <img src={GitHubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-perez-zuluaga/"
            className="contact__social"
            target="__blank"
          >
            <img src={LinkedInIcon} alt="LinkedIn icon" />
          </a>
          <a
            href="mailto:spezuluaga@gmail.com"
            className="contact__social"
            target="__blank"
          >
            <img src={GmailIcon} alt="Gmail Icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
