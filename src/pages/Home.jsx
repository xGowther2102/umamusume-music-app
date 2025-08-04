import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { albums } from '../data/albums';
import AlbumCard from '../components/AlbumCard';

// Import Swiper styles (solo cargado cuando se necesita esta página)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Home.css';

/**
 * Home page component. Displays a friendly welcome and highlights the most
 * popular albums and songs. Albums are sorted by listen count with the top
 * five shown first. The list of songs is built by flattening all albums and
 * selecting five tracks from the start of the array. Feel free to enhance
 * this logic to incorporate play counts per song.
 * 
 * Optimizado con useMemo para evitar recálculos innecesarios.
 */
const Home = () => {
  // Memoizar cálculos pesados para evitar recalcularlos en cada render
  const { topAlbums, topSongs, creatorFavorites } = useMemo(() => {
    // Sort albums by listens descending and take the top five
    const sortedAlbums = [...albums]
      .sort((a, b) => b.listens - a.listens)
      .slice(0, 5);

    // Flatten songs across albums and take the first five as the most listened.
    const allSongs = albums.flatMap(album =>
      album.songs.map(song => ({ ...song, albumId: album.id, albumTitle: album.title }))
    );
    const popularSongs = allSongs.slice(0, 5);

    // Favoritas del creador (selección manual de canciones especiales)
    const favorites = allSongs.filter(song => 
      ['Grow Up Shine!', 'Make Debut!', 'Winning Dream Stage', 'Umapyoi Densetsu', 'Fanfare for Future!'].includes(song.title)
    ).slice(0, 5);

    return {
      topAlbums: sortedAlbums,
      topSongs: popularSongs,
      creatorFavorites: favorites
    };
  }, []); // Dependencias vacías porque albums es estático

  // Configuración común para Swiper memoizada
  const swiperConfig = useMemo(() => ({
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    slidesPerView: 1,
    navigation: true,
    pagination: { clickable: true },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  }), []);

  const albumSwiperConfig = useMemo(() => ({
    ...swiperConfig,
    modules: [Navigation, Pagination, Autoplay],
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }
  }), [swiperConfig]);

  return (
    <div className="home container">
      <header className="home__header">
        <div className="home__logo-container">
          <img 
            src={import.meta.env.PROD ? "/umamusume_sound/images/umamusume_logo.webp" : "/images/umamusume_logo.webp"} 
            alt="Umamusume Pretty Derby Logo" 
            className="home__logo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        <h1>Bienvenido a la Biblioteca Musical de Umamusume</h1>
        <p>
          Esta aplicación está diseñada para compartir y celebrar la música del
          universo de <strong>Umamusume Pretty Derby</strong>. Aquí podrás
          explorar álbumes, escuchar canciones y descargar tus pistas favoritas.
          Todo el contenido se comparte con fines recreativos y para apoyar a
          los creadores originales.
        </p>
      </header>
      <section className="home__section">
        <h2>Álbumes más escuchados</h2>
        <Swiper
          {...albumSwiperConfig}
          className="home__album-swiper"
        >
          {topAlbums.map(album => (
            <SwiperSlide key={album.id}>
              <AlbumCard album={album} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="home__section">
        <h2>Canciones destacadas</h2>
        <Swiper
          {...swiperConfig}
          className="home__song-swiper"
        >
          {topSongs.map((song, index) => (
            <SwiperSlide key={index}>
              <div className="home__song-card">
                <span className="home__song-title">{song.title}</span>
                <span className="home__song-album">{song.albumTitle}</span>
                <a
                  href={song.audioUrl}
                  className="home__song-download"
                  download
                  title={`Descargar ${song.title}`}
                >
                  📥
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      
      <section className="home__section">
        <h2>🎵 Favoritas del Creador</h2>
        <Swiper
          {...swiperConfig}
          className="home__song-swiper home__song-swiper--favorite"
        >
          {creatorFavorites.map((song, index) => (
            <SwiperSlide key={`favorite-${index}`}>
              <div className="home__song-card home__song-card--favorite">
                <span className="home__song-title">{song.title}</span>
                <span className="home__song-album">{song.albumTitle}</span>
                <div className="home__creator-badge">⭐ Recomendado</div>
                <a
                  href={song.audioUrl}
                  className="home__song-download"
                  download
                  title={`Descargar ${song.title}`}
                >
                  📥
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Home;