import React from 'react';

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
        <p>
          Me puedes escribir directamente a mi correo:{' '}
          <a href="mailto:spezuluaga@gmail.com">spezuluaga@gmail.com</a>
        </p>
        <a href="#">Descarga mi CV</a>
        <div className="contact__socialContainer">
          <a href="" className="contact__social"></a>
          <a href="" className="contact__social"></a>
        </div>
        Descargar CV Ver GitHub Ver LinkedIn Ver correo o un mail to
      </div>
    </div>
  );
};

export default Contact;
