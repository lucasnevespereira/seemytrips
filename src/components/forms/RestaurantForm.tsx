"use client";

import React, { useState } from 'react';
import { Restaurant } from '@/types';

interface RestaurantFormProps {
    onNext: () => void;
    onPrev: () => void;
    setRestaurants: (restaurants: Restaurant[]) => void;
}

const RestaurantForm: React.FC<RestaurantFormProps> = ({ onNext, onPrev, setRestaurants }) => {
    const [restaurants, setLocalRestaurants] = useState<Restaurant[]>([]);

    const addRestaurant = () => {
        setLocalRestaurants([...restaurants, { id: new Date().toISOString(), tripId: '', name: '', description: '', address: '', phone: '', website: '', priceRange: '', cuisine: '', imageUrl: '' }]);
    };

    const handleSubmit = () => {
        setRestaurants(restaurants);
        onNext();
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Restaurants</h2>
            {restaurants.map((restaurant, index) => (
                <div key={index}>
                    <input type="text" placeholder="Name" value={restaurant.name} onChange={(e) => {
                        const newRestaurants = [...restaurants];
                        newRestaurants[index].name = e.target.value;
                        setLocalRestaurants(newRestaurants);
                    }} />
                    {/* Additional fields for the restaurant */}
                </div>
            ))}
            <button type="button" onClick={addRestaurant} className="btn btn-secondary">Add Restaurant</button>
            <div className="flex justify-between">
                <button type="button" onClick={onPrev} className="btn btn-secondary">Back</button>
                <button type="button" onClick={handleSubmit} className="btn btn-primary">Next</button>
            </div>
        </div>
    );
};

export default RestaurantForm;
