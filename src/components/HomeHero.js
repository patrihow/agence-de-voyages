import React from 'react';

function HomeHero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center"
      style={{
        minHeight: '100vh'
      }}
    >
      {/* img bg */}
      <img
        src="/images/hero-voyage.jpg"
        alt="Voyage"
        className="absolute inset-0 w-full h-full object-cover"
      />
        {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
          Bienvenue dans notre agence de voyages
        </h1>
        <p className="text-lg md:text-2xl text-gray-100 mb-6 max-w-2xl mx-auto drop-shadow">
          Explorez le monde avec nous.
        </p>
        <a
          href="/tours"
          className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow transition"
        >
          Voir les forfaits
        </a>
      </div>
    </section>
  );
}

export default HomeHero;
