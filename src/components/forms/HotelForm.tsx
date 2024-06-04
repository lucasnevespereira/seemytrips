"use client";

import React, { useState } from 'react';
import { Hotel } from '@/types';

interface HotelFormProps {
    onPrev: () => void;
    setHotels: (hotels: Hotel[]) => void;
}

const HotelForm: React.FC<HotelFormProps> = ({ onPrev, setHotels }) => {
    const [hotels, setLocalHotels] = useState<Hotel[]>([]);

    const addHotel = () => {
        setLocalHotels([...hotels, { id: new Date().toISOString(), tripId: '', name: '', description: '', address: '', phone: '', website: '', priceRange: '', rating: 0, imageUrl: '' }]);
    };

    const handleSubmit = () => {
        setHotels(hotels);
    };

    return (
        <div>
            <h2 className="text-xl font-bold">Hotels</h2>
            {hotels.map((hotel, index) => (
                <div key={index}>
                    <input type="text" placeholder="Name" value={hotel.name} onChange={(e) => {
                        const newHotels = [...hotels];
                        newHotels[index].name = e.target.value;
                        setLocalHotels(newHotels);
                    }} />
                    {/* Additional fields for the hotel */}
                </div>
            ))}
            <button type="button" onClick={addHotel} className="btn btn-secondary">Add Hotel</button>
            <div className="flex justify-between">
                <button type="button" onClick={onPrev} className="btn btn-secondary">Back</button>
                <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
};

export default HotelForm;
