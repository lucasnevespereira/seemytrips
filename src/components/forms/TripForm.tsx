"use client";

import React, { useState, useEffect } from 'react';
import { Trip } from '@/types';

interface TripFormProps {
    onNext: () => void;
    setTrip: (trip: Trip) => void;
    initialData?: Trip | null;
}

const TripForm: React.FC<TripFormProps> = ({ onNext, setTrip, initialData }) => {
    const [destination, setDestination] = useState(initialData?.destination || '');
    const [startDate, setStartDate] = useState(initialData?.startDate || '');
    const [endDate, setEndDate] = useState(initialData?.endDate || '');
    const [status, setStatus] = useState(initialData?.status || '');
    const [budget, setBudget] = useState(initialData?.budget || 0);
    const [notes, setNotes] = useState(initialData?.notes || '');

    const handleSubmit = () => {
        const newTrip: Trip = {
            id: new Date().toISOString(),
            destination,
            startDate,
            endDate,
            status,
            budget,
            notes,
        };
        setTrip(newTrip);
        onNext();
    };

    return (
        <div className="rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Trip Details</h2>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-300">Destination</label>
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Status</label>
                    <input
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Budget</label>
                    <input
                        type="number"
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))}
                        className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Notes</label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-700 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-gray-300"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TripForm;
