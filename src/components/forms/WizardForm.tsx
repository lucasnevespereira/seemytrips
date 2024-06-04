"use client";

import React, { useState } from 'react';
import TripForm from './TripForm';
import ActivityForm from './ActivityForm';
import { Trip, Activity } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

const Wizard: React.FC = () => {
    const [step, setStep] = useState(0);
    const [trip, setTrip] = useState<Trip | null>(null);
    const [activities, setActivities] = useState<Activity[]>([]);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <AnimatePresence mode={"wait"}>
                {step === 0 && (
                    <motion.div
                        key="trip-form"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-lg"
                    >
                        <TripForm onNext={nextStep} setTrip={setTrip} initialData={trip} />
                    </motion.div>
                )}
                {step === 1 && (
                    <motion.div
                        key="activity-form"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-lg"
                    >
                        <ActivityForm onNext={nextStep} onPrev={prevStep} setActivities={setActivities} initialData={activities} />
                    </motion.div>
                )}
                {step === 2 && (
                    <motion.div
                        key="summary"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 0.5 }}
                        className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-2xl font-bold mb-6 text-white">Summary</h2>
                        <pre className="text-gray-300">{JSON.stringify({ trip, activities }, null, 2)}</pre>
                        <div className="flex justify-between mt-4">
                            <button
                                type="button"
                                onClick={prevStep}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                                Back
                            </button>
                            <button
                                type="button"
                                onClick={() => alert('Trip submitted!')}
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Wizard;
