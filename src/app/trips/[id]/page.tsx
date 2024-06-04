"use client";

import React, { useEffect, useState } from 'react';
import { Trip, Activity, Restaurant, Hotel } from '@/types';
import {useTrips} from "@/hooks/useTrips";
import {Calendar, DollarSign} from "lucide-react";
import {useActivities} from "@/hooks/useActivities";

interface TripDetailProps {
    trip: Trip;
    activities: Activity[];
    restaurants: Restaurant[];
    hotels: Hotel[];
}

const TripDetail: React.FC<TripDetailProps> = ({ trip, activities, restaurants, hotels }) => (
    <div className="p-8">
        <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-medium text-white-900">{trip.destination}</h1>
            <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <p className="text-sm font-medium text-green-500">{trip.status}</p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
                <div className="mb-4">
                    <p className="text-sm font-medium text-white-600">Start Date</p>
                    <p className="text-sm font-medium text-white-900">
                        <Calendar className="inline-block w-4 h-4 mr-1" />
                        {trip.startDate}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-sm font-medium text-white-600">End Date</p>
                    <p className="text-sm font-medium text-white-900">
                        <Calendar className="inline-block w-4 h-4 mr-1" />
                        {trip.endDate}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-sm font-medium text-white-600">Budget</p>
                    <p className="text-sm font-medium text-white-900">
                        <DollarSign className="inline-block w-4 h-4 mr-1" />
                        {trip.budget}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-sm font-medium text-white-600">Notes</p>
                    <p className="text-sm font-medium text-white-900">{trip.notes}</p>
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <p className="text-sm font-medium text-white-600">Activities</p>
                    <ul>
                        {activities.map((activity) => (
                            <li key={activity.id}>{activity.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="text-sm font-medium text-white-600">Restaurants</p>
                    <ul>
                        {restaurants.map((restaurant) => (
                            <li key={restaurant.id}>{restaurant.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-4">
                    <p className="text-sm font-medium text-white-600">Hotels</p>
                    <ul>
                        {hotels.map((hotel) => (
                            <li key={hotel.id}>{hotel.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const TripPage = ({ params }: { params: { id: string } }) => {
    console.log("TripPage")
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const trips = useTrips();
    const trip = trips.find((trip) => trip.id === params.id);
    const activities = useActivities(trip?.id || '');

    if (!trip) {
        return <div>Trip not found</div>;
    }

    return <TripDetail trip={trip} activities={activities} restaurants={restaurants} hotels={hotels} />;
}


export default TripPage;