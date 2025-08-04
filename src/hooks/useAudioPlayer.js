import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * Hook personalizado para manejar la reproducción de audio
 * Optimizado para mejor rendimiento y limpieza de memoria
 */
export const useAudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const timeUpdateRef = useRef(null);

  // Cleanup function para evitar memory leaks
  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.removeEventListener('timeupdate', timeUpdateRef.current);
      audioRef.current.removeEventListener('loadedmetadata', () => {});
      audioRef.current.removeEventListener('ended', () => {});
    }
    if (timeUpdateRef.current) {
      clearInterval(timeUpdateRef.current);
    }
  }, []);

  // Configurar eventos del audio cuando cambia la pista
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;

    const audio = audioRef.current;
    
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [currentTrack]);

  // Cleanup al desmontar el componente
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  const playTrack = useCallback((track) => {
    if (audioRef.current && currentTrack?.audioUrl === track.audioUrl) {
      // Si es la misma pista, solo play/pause
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // Nueva pista
      cleanup();
      setCurrentTrack(track);
      setCurrentTime(0);
      setIsPlaying(true);
    }
  }, [currentTrack, isPlaying, cleanup]);

  const pauseTrack = useCallback(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const seekTo = useCallback((time) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  }, []);

  return {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    audioRef,
    playTrack,
    pauseTrack,
    seekTo,
    setCurrentTrack
  };
};
