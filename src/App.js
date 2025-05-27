import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/Home';

function App() {
    return (
        <Router>
            <div className="font-sans min-h-screen">
                <Header />
                <main className="p-8">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        {/* autres routes seront ajoutées ici */}
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
