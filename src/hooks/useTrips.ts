"use client";

import { useState, useEffect } from 'react';
import {Trip} from "@/types";

export const useTrips = () => {
    const [trips, setTrips] = useState<Trip[]>([]);

    useEffect(() => {
        const fetchTrips = async () => {
            const res = await fetch('http://localhost:3000/data/trips.json');
            const data = await res.json();

            setTrips(data.trips);
        };

        fetchTrips();
    }, []);

    return trips;
};

