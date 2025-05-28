import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Tour = () => {
    const { id } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        const fetchTour = async () => {
            try {
                const response = await fetch(`http://localhost:5000/tours/${id}`);
                const data = await response.json();
                setTour(data);
            } catch (error) {
                console.error("Error fetching tour:", error);
            }
        }
        fetchTour();
    }, [id]);

    if (!tour) return <div>Chargement...</div>;

    return (
        <div className="bg-blue-200 p-4 my-2 rounded">
            <h2 className="text-2xl font-bold">{tour.title}</h2>
            <p className="text-lg">{tour.description}</p>
            <p className="text-lg">Prix: ${tour.price}</p>
            <p className="text-lg">Catégorie: {tour.category}</p>
            <Link to="/tours" className="text-blue-700 hover:underline">Retour</Link>
        </div>
    );
}
export default Tour;
