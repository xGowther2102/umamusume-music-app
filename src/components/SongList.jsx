import React, { memo, useCallback } from 'react';

import './SongList.css';

/**
 * SongList renders a list of tracks for a given album. Each song displays its
 * title along with buttons to play and download the track. When the user
 * clicks play, the onSelect callback is invoked so the parent component can
 * update the currently playing track. Additional information like vocals,
 * composer, and arranger is displayed when available.
 *
 * Memoizado para evitar re-renders innecesarios cuando las props no cambian.
 *
 * @param {Object[]} songs - Array of song objects with title, audioUrl and optional metadata
 * @param {Function} onSelect - Callback to notify when a song should be played
 */
const SongList = memo(({ songs, onSelect }) => {
  // Optimizar el handler de click para evitar crear nuevas funciones en cada render
  const handleSongClick = useCallback((song) => {
    onSelect(song);
  }, [onSelect]);

  const handleKeyDown = useCallback((e, song) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect(song);
    }
  }, [onSelect]);

  return (
    <div className="song-list">
      <h3 className="song-list__heading">Canciones</h3>
      <div className="song-list__container">
        {songs.map((song, index) => (
          <div 
            key={`${song.title}-${index}`}
            className="song-list__item"
            onClick={() => handleSongClick(song)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => handleKeyDown(e, song)}
          >
            <div className="song-list__main-info">
              <div className="song-list__number">{String(index + 1).padStart(2, '0')}</div>
              <div className="song-list__track-info">
                <span className="song-list__title">{song.title}</span>
                {song.vocals && (
                  <div className="song-list__vocals">🎤 {song.vocals}</div>
                )}
                {(song.composer || song.arranger) && (
                  <div className="song-list__credits">
                    {song.composer && <span>♪ {song.composer}</span>}
                    {song.arranger && <span className="song-list__arranger">🎵 {song.arranger}</span>}
                  </div>
                )}
              </div>
            </div>
            <div className="song-list__play-indicator">
              <span className="play-icon">▶️</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

// Agregar displayName para debugging
SongList.displayName = 'SongList';

export default SongList;