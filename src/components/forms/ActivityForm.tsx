"use client";

import React, { useState, useEffect } from 'react';
import { Activity } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';
import ActivitySummaryCard from '@/components/cards/ActivitySummaryCard';

interface ActivityFormProps {
    onNext: () => void;
    onPrev: () => void;
    setActivities: (activities: Activity[]) => void;
    initialData?: Activity[];
}

const ActivityForm: React.FC<ActivityFormProps> = ({ onNext, onPrev, setActivities, initialData }) => {
    const [activities, setLocalActivities] = useState<Activity[]>(initialData || []);
    const [currentActivity, setCurrentActivity] = useState<Activity>({
        id: '',
        tripId: '',
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        location: '',
        price: 0,
        currency: '',
        imageUrl: ''
    });

    useEffect(() => {
        if (initialData) {
            setLocalActivities(initialData);
        }
    }, [initialData]);

    const addActivity = () => {
        setLocalActivities([
            ...activities,
            { ...currentActivity, id: new Date().toISOString() }
        ]);
        setCurrentActivity({
            id: '',
            tripId: '',
            name: '',
            description: '',
            startDate: '',
            endDate: '',
            location: '',
            price: 0,
            currency: '',
            imageUrl: ''
        });
    };

    const removeActivity = (index: number) => {
        const newActivities = activities.filter((_, i) => i !== index);
        setLocalActivities(newActivities);
    };

    const handleSubmit = () => {
        setActivities(activities);
        onNext();
    };

    return (
        <div className="rounded-lg shadow-lg max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-white">Activities</h2>
            <div className="mt-6 space-y-4">
                <h3 className="text-xl font-bold text-white">Added Activities</h3>
                <AnimatePresence>
                    {activities.map((activity, index) => (
                        <motion.div
                            key={activity.id}
                            initial={{opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: 10}}
                            transition={{duration: 0.3}}
                        >
                            <ActivitySummaryCard
                                activity={activity}
                                onRemove={() => removeActivity(index)}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        value={currentActivity.name}
                        onChange={(e) => setCurrentActivity({...currentActivity, name: e.target.value})}
                        className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Description</label>
                    <textarea
                        placeholder="Description"
                        value={currentActivity.description}
                        onChange={(e) => setCurrentActivity({...currentActivity, description: e.target.value})}
                        className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Start Date</label>
                        <input
                            type="date"
                            value={currentActivity.startDate}
                            onChange={(e) => setCurrentActivity({...currentActivity, startDate: e.target.value})}
                            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">End Date</label>
                        <input
                            type="date"
                            value={currentActivity.endDate}
                            onChange={(e) => setCurrentActivity({...currentActivity, endDate: e.target.value})}
                            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Location</label>
                    <input
                        type="text"
                        placeholder="Location"
                        value={currentActivity.location}
                        onChange={(e) => setCurrentActivity({...currentActivity, location: e.target.value})}
                        className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Price</label>
                        <input
                            type="number"
                            placeholder="Price"
                            value={currentActivity.price}
                            onChange={(e) => setCurrentActivity({...currentActivity, price: Number(e.target.value)})}
                            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Currency</label>
                        <input
                            type="text"
                            placeholder="Currency"
                            value={currentActivity.currency}
                            onChange={(e) => setCurrentActivity({...currentActivity, currency: e.target.value})}
                            className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Image URL</label>
                    <input
                        type="text"
                        placeholder="Image URL"
                        value={currentActivity.imageUrl}
                        onChange={(e) => setCurrentActivity({...currentActivity, imageUrl: e.target.value})}
                        className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-800 text-gray-300"
                    />
                </div>
                <button
                    type="button"
                    onClick={addActivity}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add Activity
                </button>
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onPrev}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    >
                        Back
                    </button>
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

export default ActivityForm;
