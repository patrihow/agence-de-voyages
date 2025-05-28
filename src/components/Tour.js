import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";

const Tour = ({ setShowAddTour}) => {
    const { id } = useParams()
    const [tour, setTour] = useState([])
    useEffect(()=>{
        setShowAddTour(false)
        const fetchTour = async () => {
            try{const response = await fetch(`http://localhost:5000/packages/${id}`)
            const data = await response.json()
            setTour(data)}
            catch(error){
                console.error("Error fetching tour:", error);
            }
        }
        fetchTour()
    }, [id, setShowAddTour])
    return(
        <>
        <div className="bg-blue-200 p-2 my-2 px-4 cursor pointer rounded">
            <h2 className="text-2xl font-bold">{tour.name}</h2>
            <p className="text-lg">{tour.description}</p>
            <p className="text-lg">Price: {tour.price} €</p>
            <p className="text-lg">Duration: {tour.duration} days</p>
            <p className="text-lg">Available: {tour.available ? "Yes" : "No"}</p>
            <Link to="/" className="text-blue-700 hover:underline">Go Back</Link>
        </div>
        </>
    )
}
export default Tour;