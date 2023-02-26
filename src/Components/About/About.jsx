import React from 'react';
import ProfilePhoto from '../../assets/profilePhoto2.webp';

const About = () => {
  return (
    <div className="about">
      <div className="about__description">
        <h2>Acerca de mí</h2>
        <p>
          Soy un fullstack web developer colombiano, me apasiona la tecnología,
          las consolas y los videojuegos, más de 2 años creando pequeñas
          aplicaciones.
        </p>
        <p>
          Me gusta programar cosas tanto en el desarrollo web frontend como en
          el backend.
        </p>
        <p>
          He utilizado lenguajes de programación como Python, Kotlin, Java,
          Dart, TypeScript y mi main es JavaScript 💛
        </p>
        <p> Me gusta la tecnología, el deporte y los animales.</p>
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
