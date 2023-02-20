import React from 'react';
import ProfilePhoto from '../../assets/profilePhoto.webp';

const Home = () => {
  return (
    <div className="home">
      <div className="home__profileImage">
        <img src={ProfilePhoto} alt="Foto de perfil" />
      </div>
      <div className="home__info">
        <h1 className="home__info__greeting">
          ¡Hola! Soy <b className="home__info__name">Sebastian Pérez</b>
        </h1>
        <p className="home__info_description">Desarrollador Fullstack</p>
      </div>
    </div>
  );
};

export default Home;
