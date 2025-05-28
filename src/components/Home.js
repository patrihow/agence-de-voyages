import React from 'react';
import { Link } from 'react-router-dom';

import HomeHero from './HomeHero';

const tours = [
  {
    id: 1,
    title: "Séjour à Paris",
    description: "Découvrez la magie de Paris.",
    imageUrl: "/images/paris.png",
    price: 499,
    category: "Culture"
  },
  {
    id: 2,
    title: "Aventure en Antelope Canyon",
    description: "Explorez les canyons d'Arizona.",
    imageUrl: "/images/canyon.png",
    price: 799,
    category: "Aventure"
  },
  {
    id: 3,
    title: "Séjour balnéaire, Santa Marta",
    description: "Profitez des plages de Colombie.",
    imageUrl: "/images/tayrona.png",
    price: 799,
    category: "Plage"
  },
  {
    id: 4,
    title: "Circuit gastronomique, Montréal",
    description: "Savourez la cuisine locale.",
    imageUrl: "/images/montreal.png",
    price: 429,
    category: "Gastronomie"
  }
];

function Home() {
  return (
    <div>
      {/* Hero Section */}
        <HomeHero />
    
        {/* Welcome Section */}
      <section className="bg-blue-50 py-12">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4">
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900">
              Bienvenue dans notre agence de voyages
            </h1>
            <p className="mb-6 text-gray-700 text-lg">
              Explorez le monde avec nos forfaits exclusifs, adaptés à tous les goûts et tous les budgets.
            </p>
            <Link
              to="/tours"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Voir les forfaits
            </Link>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/voyage.jpg"
              alt="Voyage"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold mb-8 text-center text-blue-800">Nos forfaits populaires</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {tours.map(tour => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-md w-full sm:w-64 md:w-60 flex flex-col items-center p-4 transition hover:shadow-xl"
            >
              <img
                src={tour.imageUrl}
                alt={tour.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{tour.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{tour.description}</p>
              <span className="text-blue-700 font-bold mb-1">${tour.price} </span>
              <span className="text-xs text-gray-500 mb-2">{tour.category}</span>
              <Link
                to={`/tour/${tour.id}`}
                className="mt-auto text-blue-600 hover:underline text-sm"
              >
                Détails
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Banner */}
      <section className="bg-blue-600 py-8 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              Abonnez-vous à notre newsletter
            </h2>
            <p className="text-blue-100">
              Recevez les dernières actualités et offres exclusives directement dans votre boîte mail !
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Votre email"
              className="px-4 py-2 rounded-md border border-blue-300 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-700 px-5 py-2 rounded-md font-semibold hover:bg-blue-100 transition"
            >
              S'abonner
            </button>
          </form>
        </div>
      </section>

      {/* About Preview */}
      <section className="container mx-auto py-12 px-4">
        <div className="bg-gray-100 rounded-lg shadow p-6 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2 text-blue-900">À propos de l'agence</h3>
            <p className="text-gray-700 max-w-xl">
              Notre agence de voyages est dédiée à la création d'expériences inoubliables à travers le monde. Découvrez notre histoire, nos valeurs et notre équipe passionnée.
            </p>
          </div>
          <Link
            to="/about"
            className="mt-4 md:mt-0 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            En savoir plus
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
