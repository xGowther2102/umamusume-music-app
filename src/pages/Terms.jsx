import React from 'react';
import './Terms.css';

/**
 * Terms page outlines the terms and conditions of using this fan site. It
 * clarifies that no copyrighted content is hosted, downloads are from
 * external sources and that all rights belong to the original owners.
 */
const Terms = () => {
  return (
    <div className="terms container">
      <h1>Términos y condiciones</h1>
      <p>
        Este sitio web se proporciona «tal cual» con fines informativos y de
        entretenimiento. No alojamos archivos de audio ni vendemos contenido; los
        enlaces de descarga disponibles se dirigen a recursos externos de
        muestras de audio. Los derechos de las canciones y las ilustraciones
        pertenecen a sus respectivos propietarios.
      </p>
      <p>
        Al utilizar esta aplicación aceptas utilizar el material exclusivamente
        para uso personal y respetar a los artistas y creadores. Si te gusta la
        música de Umamusume Pretty Derby, considera adquirir los álbumes y
        apoyar a los compositores comprando a través de canales oficiales.
      </p>
      <p>
        Nos reservamos el derecho de actualizar estos términos en cualquier
        momento. El uso continuado del sitio después de los cambios
        constituirá tu aceptación de los nuevos términos.
      </p>
    </div>
  );
};

export default Terms;