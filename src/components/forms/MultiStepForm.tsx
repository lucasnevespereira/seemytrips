"use client";

import React, { useState } from 'react';
import TripForm from './TripForm';
import ActivityForm from './ActivityForm';
import RestaurantForm from './RestaurantForm';
import HotelForm from './HotelForm';
import { Trip, Activity, Restaurant, Hotel } from '@/types';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [trip, setTrip] = useState<Trip | null>(null);
    const [activities, setActivities] = useState<Activity[]>([]);
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [hotels, setHotels] = useState<Hotel[]>([]);

    const handleNext = () => setStep(step + 1);
    const handlePrev = () => setStep(step - 1);

    return (
        <div className="container mx-auto">
            {step === 1 && <TripForm onNext={handleNext} setTrip={setTrip} />}
            {step === 2 && <ActivityForm onNext={handleNext} onPrev={handlePrev} setActivities={setActivities} />}
            {step === 3 && <RestaurantForm onNext={handleNext} onPrev={handlePrev} setRestaurants={setRestaurants} />}
            {step === 4 && <HotelForm onPrev={handlePrev} setHotels={setHotels} />}
            {step > 4 && (
                <div>
                    <h2 className="text-xl font-bold">Review your trip</h2>
                    <button onClick={handlePrev} className="btn btn-secondary">Back</button>
                    <button className="btn btn-primary">Submit</button>
                </div>
            )}
        </div>
    );
};

export default MultiStepForm;
