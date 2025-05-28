import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="mb-2">© 2025 Agence de Voyages. Tous droits réservés.</p>
                <p>
                    <Link to="/privacy-policy" className="text-blue-400 hover:underline">Politique de confidentialité</Link> | 
                    <Link to="/terms-of-service" className="text-blue-400 hover:underline"> Conditions d'utilisation</Link>
                </p>
            </div>
        </footer>
    )
}
export default Footer