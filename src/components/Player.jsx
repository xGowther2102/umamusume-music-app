import React, { memo } from 'react';
import './Player.css';

/**
 * Player displays a simple audio element that plays the currently selected
 * track. It also shows the track title, additional metadata when available,
 * and offers a download link for the individual song. If no track is selected 
 * the component prompts the user to choose a song from the list above.
 *
 * Memoizado para evitar re-renders innecesarios cuando las props no cambian.
 *
 * @param {Object} currentTrack - The currently selected song with title, audioUrl and optional metadata
 */
const Player = memo(({ currentTrack }) => {
  if (!currentTrack) {
    return (
      <div className="player empty">
        <p>Selecciona una canción para escuchar.</p>
      </div>
    );
  }
  
  return (
    <div className="player">
      <div className="player__info">
        <h4 className="player__title">🎵 {currentTrack.title}</h4>
        {currentTrack.vocals && (
          <p className="player__vocals">🎤 <strong>Intérprete:</strong> {currentTrack.vocals}</p>
        )}
        {currentTrack.composer && (
          <p className="player__composer">♪ <strong>Compositor:</strong> {currentTrack.composer}</p>
        )}
        {currentTrack.arranger && (
          <p className="player__arranger">🎵 <strong>Arreglista:</strong> {currentTrack.arranger}</p>
        )}
        {currentTrack.mixEngineer && (
          <p className="player__mix">🎛️ <strong>Ingeniero de Mezcla:</strong> {currentTrack.mixEngineer}</p>
        )}
        {currentTrack.guitar && (
          <p className="player__guitar">🎸 <strong>Guitarra:</strong> {currentTrack.guitar}</p>
        )}
        {currentTrack.trumpet && (
          <p className="player__trumpet">🎺 <strong>Trompeta:</strong> {currentTrack.trumpet}</p>
        )}
        {currentTrack.brassArranger && (
          <p className="player__brass">🎺 <strong>Arreglista de Metales:</strong> {currentTrack.brassArranger}</p>
        )}
      </div>

      <audio 
        controls 
        src={currentTrack.audioUrl} 
        className="player__audio"
        preload="metadata"
        key={currentTrack.audioUrl}
        autoPlay
      >
        Tu navegador no soporta la etiqueta de audio.
      </audio>
    </div>
  );
});

// Agregar displayName para debugging
Player.displayName = 'Player';

export default Player;