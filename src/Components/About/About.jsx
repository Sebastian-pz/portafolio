import React from 'react';
import ProfilePhoto from '../../assets/profilePhoto2.webp';

const About = () => {
  return (
    <div className="about">
      <div className="about__description">
        <h2>Acerca de mí</h2>
        <p>
          Soy un fullstack web developer colombiano, me apasiona la tecnología,
          las consolas y los videojuegos, más de 2 programando aplicaciones. He
          trabajado de como desarrollador freelance en proyectos fullstack para
          empresas argentinas.
        </p>
        <p>
          He utilizado lenguajes de programación como Python, Kotlin, Java,
          Dart, TypeScript y mi main es JavaScript 💛
        </p>
        <p className="about__lastp">
          Me gusta la tecnología, el deporte y los animales.
        </p>
        <p className="about__lastp">
          Contáctame por correo: <strong>spezuluaga@gmail.com</strong>
        </p>
      </div>
      <div className="about__linkedin">
        <img src={ProfilePhoto} alt="Foto de perfil LinkedIn" />
        <a
          className="about__linkedin__button"
          href="https://www.linkedin.com/in/sebastian-p%C3%A9rez-zuluaga-859715206/"
          target="__blank"
        >
          Contáctame por Linkedin
        </a>
      </div>
    </div>
  );
};

export default About;
