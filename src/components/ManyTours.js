import SingleTour from './SingleTour';

const ManyTours = ({ tours, onDelete, onToggle }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tours.map((tour) => (
                <SingleTour key={tour.id}
                    tour={tour}
                    onDelete={onDelete}
                    onToggle={onToggle} />
            ))}

        </div>
    );
}

export default ManyTours;