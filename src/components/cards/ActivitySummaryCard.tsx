import React from 'react';
import { Activity } from '@/types';

interface ActivitySummaryCardProps {
    activity: Activity;
    onRemove: () => void;
}

const ActivitySummaryCard: React.FC<ActivitySummaryCardProps> = ({ activity, onRemove }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-md shadow-md flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div>
                    <h3 className="text-lg font-bold text-white">{activity.name}</h3>
                    <p className="text-sm text-gray-400">{activity.description}</p>
                    <p className="text-sm text-gray-400">{activity.location}</p>
                </div>
            </div>
            <button
                type="button"
                onClick={onRemove}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white py-2 px-4 rounded-md"
            >
                Remove
            </button>
        </div>
    );
};

export default ActivitySummaryCard;
