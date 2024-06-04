import React from 'react';
import Link from "next/link";

interface QuickAccessProps {
    items: {
        label: string;
        href: string;
    }[];
}

const QuickAccess: React.FC<QuickAccessProps> = ({ items }) => (
    <div className="shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-white-900">Quick Access</h3>
            <p className="mt-1 max-w-2xl text-sm text-white-500">Get to your favorite sections of the app quickly.</p>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {items.map((item) => (
                <li key={item.label}>
                    <Link href={item.href} className="block p-6 bg-white rounded-lg shadow shadow-gray-300/5 hover:shadow-gray-300/20">
                        <p className="text-center text-gray-500">{item.label}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default QuickAccess;
