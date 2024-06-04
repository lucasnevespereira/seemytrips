"use client";

import TripList from '../components/TripList';
import QuickAccess from '../components/QuickAccess';
import {useTrips} from '@/hooks/useTrips';

const Home = () => {
    const trips = useTrips();

    return (
        <main className="h-full flex flex-col items-center justify-center">
            <div className="w-full max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-4xl font-bold text-center text-balance text-gray-800 dark:text-white">
                        Welcome to SeeMyTrips
                    </h1>
                    <p className="text-lg text-center text-balance text-gray-600 dark:text-gray-400">
                        Consult your recent or current trips and quickly access the different sections of
                        the application.
                    </p>
                </div>
                <TripList trips={trips}/>
                <QuickAccess
                    items={[
                        {label: 'Voyages', href: '/trips'},
                        {label: 'Restaurants', href: '/restaurants'},
                        {label: 'Activités', href: '/activities'},
                    ]}
                />
            </div>
        </main>
    );
};

export default Home;
