import Header from './components/Header';
import HomePage from './components/Home';
import About from './components/About';
import ManyTours from './components/ManyTours';
import Tour from './components/Tour';
import Footer from './components/Footer';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
    useEffect(()=> {
        const getTours = async () => {
            const tourFromServer = await fetchTours('http://localhost:5000/tours')
            setTours(tourFromServer)
        }
        getTours()
    }, [])

    const fetchTours = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    const [tours, setTours] = useState([])

    const deleteTour = async (id) => {
        await fetch(`http://localhost:5000/tours/${id}`, {
            method: 'DELETE'
        })
        setTours(tours.filter((tour) => tour.id !== id))
    }
    const toggleAvailable = async (id) => {
        const tourToToggle = await fetch(`http://localhost:5000/tours/${id}`)
        const data = await tourToToggle.json()
        const updatedTour = { ...data, available: !data.available }

        const res = await fetch(`http://localhost:5000/tours/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedTour)
        })

        const updatedData = await res.json()
        setTours(tours.map((tour) => tour.id === id ? { ...tour, available: updatedData.available } : tour))
    }
    const addTour = async (tour) => {
        const res = await fetch('http://localhost:5000/tours', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(tour)
        })

        const data = await res.json()
        setTours([...tours, data])
    }
    const [showAddTour, setShowAddTour] = useState(false)
  
    return (
        <BrowserRouter>
            <div className="font-sans min-h-screen">
                <Header />
                <main className="p-8">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/tours" element={<ManyTours tours={tours} />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </main>
                <Footer /> 
            </div>
        </BrowserRouter>
    );
}

export default App;
