import { FaTimes, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleTour = ({ tour, onDelete }) => {
    return (
        <div className="bg-blue-200 p-4 rounded shadow">
            <h3 className="flex justify-between items-center">
                {tour.title}
                <div>
                    <Link to={`/tour/${tour.id}`} className="mr-2 text-blue-500">
                        <FaEye />
                    </Link>
                    <FaTimes className="text-red-600 cursor-pointer" onClick={() => onDelete(tour.id)} />
                </div>
            </h3>
            <p>{tour.description}</p>
            <p><strong>Prix: </strong> ${tour.price}</p>
            <p><strong>Catégorie: </strong> {tour.category}</p>
        </div>
    );
}
export default SingleTour;