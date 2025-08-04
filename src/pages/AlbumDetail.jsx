import React, { useState, useCallback, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { albums } from '../data/albums';
import SongList from '../components/SongList';
import Player from '../components/Player';
import './AlbumDetail.css';

/**
 * AlbumDetail page shows a single album with its song list, cover art, a link
 * to legally listen/purchase and a music player to preview tracks. The layout
 * splits the page into two columns: the song list on the left and the cover
 * art with player on the right.
 * 
 * Optimizado con useCallback para evitar re-renders de componentes hijos.
 */
const AlbumDetail = () => {
  const { albumId } = useParams();
  
  // Memoizar la búsqueda del álbum para evitar recalcular en cada render
  const album = useMemo(() => 
    albums.find(a => a.id === albumId), 
    [albumId]
  );
  
  const [currentTrack, setCurrentTrack] = useState(null);

  // Memoizar el callback para evitar re-renders del SongList
  const handleTrackSelect = useCallback((track) => {
    setCurrentTrack(track);
  }, []);

  if (!album) {
    return (
      <div className="album-detail container">
        <h1>Álbum no encontrado</h1>
        <p>
          Lo sentimos, el álbum que buscas no existe. Vuelve a la{' '}
          <Link to="/albums">lista de álbumes</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="album-detail container">
      <h1 className="album-detail__title">{album.title}</h1>
      <div className="album-detail__content">
        {/* Song list on the left */}
        <div className="album-detail__songs">
          <SongList songs={album.songs} onSelect={handleTrackSelect} />
        </div>
        {/* Right side with cover and player */}
        <div className="album-detail__info">
          <div className="album-detail__cover">
            <img
              src={album.coverUrl}
              alt={`Portada del álbum ${album.title}`}
              className="album-detail__image"
              loading="lazy"
            />
            <a
              href={album.legalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="album-detail__legal-link"
            >
              Escuchar legalmente
            </a>
          </div>

          <Player currentTrack={currentTrack} />
        </div>
      </div>

      {/* Contenido horizontal debajo de todo */}
      <div className="album-detail__horizontal-content">
        {/* Album Information */}
        {(album.year || album.publisher || album.catalogNumber) && (
          <div className="album-detail__metadata">
            <h3 className="album-detail__metadata-title">Información del Álbum</h3>
            {album.year && <p><strong>Año:</strong> {album.year}</p>}
            {album.publisher && <p><strong>Publicado por:</strong> {album.publisher}</p>}
            {album.catalogNumber && <p><strong>Número de Catálogo:</strong> {album.catalogNumber}</p>}
            {album.albumType && <p><strong>Tipo:</strong> {album.albumType}</p>}
            {album.platforms && <p><strong>Plataformas:</strong> {album.platforms.join(', ')}</p>}
            {album.totalFilesize && <p><strong>Tamaño Total:</strong> {album.totalFilesize}</p>}
            <p><strong>Número de Canciones:</strong> {album.songs.length}</p>
          </div>
        )}

        {/* Description */}
        <div className="album-detail__description">
          <h3 className="album-detail__description-title">Descripción</h3>
          <p>{album.description}</p>
        </div>

        {/* Credits */}
        {album.credits && (
          <div className="album-detail__credits">
            <h3 className="album-detail__credits-title">Créditos</h3>
            {album.credits.soundProducer && <p><strong>Productor de Sonido:</strong> {album.credits.soundProducer}</p>}
            {album.credits.contentsProducer && <p><strong>Productor de Contenido:</strong> {album.credits.contentsProducer}</p>}
            {album.credits.director && <p><strong>Director:</strong> {album.credits.director}</p>}
            {album.credits.vocalRecDirector && <p><strong>Director de Grabación Vocal:</strong> {album.credits.vocalRecDirector}</p>}
            {album.credits.masteringEngineer && <p><strong>Ingeniero de Masterización:</strong> {album.credits.masteringEngineer}</p>}
            {album.credits.masteringCoordinator && <p><strong>Coordinador de Masterización:</strong> {album.credits.masteringCoordinator}</p>}
            {album.credits.anrDesk && <p><strong>A&R:</strong> {album.credits.anrDesk}</p>}
            {album.credits.dramaScenarioWriter && <p><strong>Guionista de Drama:</strong> {album.credits.dramaScenarioWriter}</p>}
            {album.credits.dramaSoundEditor && <p><strong>Editor de Sonido (Drama):</strong> {album.credits.dramaSoundEditor}</p>}
            {album.credits.dramaSoundEffects && <p><strong>Efectos de Sonido (Drama):</strong> {album.credits.dramaSoundEffects}</p>}
            {album.credits.dramaCoordinator && <p><strong>Coordinador de Drama:</strong> {album.credits.dramaCoordinator}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumDetail;