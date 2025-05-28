import { Link } from 'react-router-dom';
import React, { use } from 'react';

const About = ({ setShowAddTour }) => {
    useEffect(() => {
        setShowAddTour(false);
    }, [setShowAddTour])
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-4">À propos de notre agence de voyages</h2>
            <p className="mb-4">
                Bienvenue sur notre site d'agence de voyages ! Nous sommes passionnés par l'organisation de voyages inoubliables pour nos clients. Que vous souhaitiez explorer des destinations exotiques, découvrir des cultures fascinantes ou simplement vous détendre sur une plage paradisiaque, nous avons le forfait parfait pour vous.
            </p>
            <p className="mb-4">
                Notre équipe d'experts en voyages est là pour vous aider à planifier chaque détail de votre aventure. Nous proposons une large gamme de forfaits adaptés à tous les budgets et à tous les goûts. De plus, nous offrons un service client exceptionnel pour répondre à toutes vos questions et préoccupations.
            </p>
            <Link to="/" className="text-blue-500 hover:underline">Retour à l'accueil</Link>
        </div>
    )
}
export default About;