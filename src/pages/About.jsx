import React from 'react';
import './About.css';

/**
 * About page describes the motivation behind this project. It highlights
 * that the application is a fan effort for enjoyment and encourages users
 * to support the official releases and creators.
 */
const About = () => {
  return (
    <div className="about container">
      <h1>Acerca de este proyecto</h1>
      <p>
        La Biblioteca Musical de Umamusume es un proyecto hecho por fans con el
        objetivo de compartir la maravillosa música de <strong>Umamusume Pretty
        Derby</strong>. No tenemos ninguna intención lucrativa; este sitio es
        simplemente un homenaje a las canciones y los artistas que han dado
        vida a este universo.
      </p>
      <p>
        Te animamos a apoyar a los creadores originales adquiriendo los CD,
        descargando la música de forma legal y disfrutando del contenido
        oficial. Todas las portadas y referencias a los álbumes son usadas con
        fines informativos y de aprecio.
      </p>
      <p>
        ¡Esperamos que disfrutes explorando la música tanto como nosotros al
        crear esta pequeña aplicación!
      </p>
    </div>
  );
};

export default About;