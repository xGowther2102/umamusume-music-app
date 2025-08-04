import React from 'react';
import { albums } from '../data/albums';
import AlbumCard from '../components/AlbumCard';
import './Albums.css';

/**
 * Albums page lists all available albums in a responsive grid. Each album
 * appears as a card that links to its detail page. A heading explains
 * what the visitor can do on this page.
 */
const Albums = () => {
  return (
    <div className="albums container">
      <h1 className="albums__heading">Todos los álbumes</h1>
      <p className="albums__description">
        Explora la discografía de Umamusume Pretty Derby. Haz clic en un álbum
        para ver su lista de canciones, escuchar música y descargar pistas de
        manera individual.
      </p>
      <div className="albums__grid">
        {albums.map(album => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default Albums;