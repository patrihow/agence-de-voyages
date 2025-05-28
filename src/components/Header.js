import React, { use } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ title = 'Agence de Voyages' }) => {

    const location = useLocation()
    
    return (
        <header className="flex justify-between items-center mb-8 p-4 bg-blue-500 text-white">
            <h1 className="text-2xl">{title}</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="hover:underline">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/tours" className="hover:underline">Forfaits</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:underline">À propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
