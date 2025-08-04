import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './AlbumCard.css';

/**
 * AlbumCard presents a single album in a grid or list. It displays the cover
 * art, album title and a link to view more details. The card uses a hover
 * effect to elevate on mouse over.
 * 
 * Memoizado para evitar re-renders innecesarios cuando las props no cambian.
 */
const AlbumCard = memo(({ album }) => {
  return (
    <div className="album-card">
      <Link to={`/albums/${album.id}`} className="album-card__image-wrapper">
        <img
          src={album.coverUrl}
          alt={`Portada del álbum ${album.title}`}
          className="album-card__image"
          loading="lazy"
        />
      </Link>
      <div className="album-card__info">
        <h3 className="album-card__title">{album.title}</h3>
        <p className="album-card__listens">{album.listens.toLocaleString()} escuchas</p>
        <Link to={`/albums/${album.id}`} className="album-card__link">
          Ver álbum
        </Link>
      </div>
    </div>
  );
});

// Agregar displayName para debugging
AlbumCard.displayName = 'AlbumCard';

export default AlbumCard;