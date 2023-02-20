import React from 'react';
import ProfilePhoto from '../../assets/profilePhoto2.webp';

const About = () => {
  return (
    <div className="about">
      <div className="about__description">
        <h2>Acerca de mí</h2>
        <p>
          Soy un fullstack web developer colombiano, que le gusta programar
          cosas. Desarrollo web Frontend - Backend.
        </p>
        <p>
          He utilizado lenguajes de programación como Python, Kotlin, Java,
          Dart, TypeScript, pero mi main es Javascript 💛
        </p>
        <p>NodeJS y ReactJS</p>
        <p> Me gusta la tecnología, el deporte y los animales.</p>
      </div>
      <div className="about__linkedin">
        <img src={ProfilePhoto} alt="Foto de perfil LinkedIn" />
        linkedin logo boton
        <a
          className="about__linkedin__button"
          href="https://www.linkedin.com/in/sebastian-p%C3%A9rez-zuluaga-859715206/"
          target="__blank"
        >
          Contáctame por Linkedin
        </a>
        icono click
      </div>
    </div>
  );
};

export default About;
