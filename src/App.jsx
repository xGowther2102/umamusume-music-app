import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Lazy loading de páginas para mejorar el rendimiento
const Home = React.lazy(() => import('./pages/Home'));
const Albums = React.lazy(() => import('./pages/Albums'));
const AlbumDetail = React.lazy(() => import('./pages/AlbumDetail'));
const About = React.lazy(() => import('./pages/About'));
const Terms = React.lazy(() => import('./pages/Terms'));

/**
 * Root component of the application. Sets up the navigation bar and client
 * side routing. Routes are defined for the home page, albums listing,
 * individual album details, the about page and the terms and conditions.
 * Implementa lazy loading para mejorar el rendimiento inicial.
 */
const App = () => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '1rem' }}>
        <Suspense fallback={
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Cargando...</p>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/albums/:albumId" element={<AlbumDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};

export default App;