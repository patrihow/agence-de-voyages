import { useState } from 'react';

const TourForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !description || !price || !category) {
            alert('Tous les champs sont obligatoires.');
            return;
        }
        onAdd({ title, description, price: Number(price), category });
        setTitle('');
        setDescription('');
        setPrice('');
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4 bg-blue-100 p-4 rounded">
            <input className="mb-2 p-2 w-full" placeholder="Nom du forfait" value={title} onChange={e => setTitle(e.target.value)} />
            <input className="mb-2 p-2 w-full" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
            <input className="mb-2 p-2 w-full" placeholder="Prix" type="number" value={price} onChange={e => setPrice(e.target.value)} />
            <input className="mb-2 p-2 w-full" placeholder="Catégorie" value={category} onChange={e => setCategory(e.target.value)} />
            <button type="submit" className="btn btn-blue">Ajouter</button>
        </form>
    );
};

export default TourForm;
