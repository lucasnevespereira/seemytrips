import React from 'react';
import {Trip} from "@/types";
import {Calendar} from "lucide-react";
import Link from "next/link";


interface TripListProps {
    trips: Trip[];
}

const TripList: React.FC<TripListProps> = ({ trips }) => (
    <div className="shadow overflow-hidden sm:rounded-lg">
        <ul className="divide-y divide-gray-200">
            {trips.map((trip) => (
                <li key={trip.id}>
                    <Link href={`/trips/${trip.id}`} className="block hover:bg-gray-100 hover:text-indigo-600">
                        <div className="px-4 py-4 sm:px-6">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-medium text-white-600 truncate">{trip.destination}</p>
                                <div className="ml-2 flex-shrink-0 flex">
                                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {trip.status}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-2 sm:flex sm:items-center sm:justify-between">
                                <div className="sm:flex">
                                    <p className="flex items-center text-sm text-gray-500">
                                        <Calendar className="h-5 w-5 text-gray-400"/>
                                        <span className="ml-1">{trip.startDate}</span>
                                    </p>
                                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                        <Calendar className="h-5 w-5 text-gray-400"/>
                                        <span className="ml-1">{trip.endDate}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default TripList;
