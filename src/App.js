import Header from './components/Header';
import HomePage from './components/Home';
import About from './components/About';
import ManyTours from './components/ManyTours';
import Tour from './components/Tour';
import Footer from './components/Footer';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    const [tours, setTours] = useState([]);
    const [showAddTour, setShowAddTour] = useState(false);

    // Fetch tours avec le server
    useEffect(() => {
        const getTours = async () => {
            const tourFromServer = await fetchTours('http://localhost:5000/tours');
            setTours(tourFromServer);
        }
        getTours();
    }, []);

    const fetchTours = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    const deleteTour = async (id) => {
        await fetch(`http://localhost:5000/tours/${id}`, { method: 'DELETE' });
        setTours(tours.filter((tour) => tour.id !== id));
    }

    const addTour = async (tour) => {
        const res = await fetch('http://localhost:5000/tours', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(tour)
        });
        const data = await res.json();
        setTours([...tours, data]);
    }

    return (
        <Router>
            <div className="font-sans min-h-screen">
                <Header />
                <main className="p-8">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/tours" element={
                            <ManyTours
                                tours={tours}
                                onDelete={deleteTour}
                                
                            />
                        } />
                        <Route path="/tour/:id" element={<Tour />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
