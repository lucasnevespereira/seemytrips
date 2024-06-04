import { useState, useEffect } from "react";
import { Activity } from "@/types";

export const useActivities = (tripId: string) => {
    const [activities, setActivities] = useState<Activity[]>([]);

    useEffect(() => {
        const fetchActivities = async () => {
            const res = await fetch(`http://localhost:3000/data/activities.json`);
            const data = await res.json();
            const filteredActivities = data.filter((activity: Activity) => activity.tripId === tripId);
            setActivities(filteredActivities);
        };

        fetchActivities();
    }, [tripId]);

    return activities;
};
