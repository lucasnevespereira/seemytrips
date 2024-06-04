export interface Trip {
    id: string;
    destination: string;
    startDate: string;
    endDate: string;
    status: string;
    budget: number;
    notes: string;
}

export interface Activity {
    id: string;
    tripId: string;
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    location: string;
    price: number;
    currency: string;
    imageUrl: string;
}

export interface Restaurant {
    id: string;
    tripId: string;
    name: string;
    description: string;
    address: string;
    phone: string;
    website: string;
    priceRange: string;
    cuisine: string;
    imageUrl: string;
}

export interface Hotel {
    id: string;
    tripId: string;
    name: string;
    description: string;
    address: string;
    phone: string;
    website: string;
    priceRange: string;
    rating: number;
    imageUrl: string;
}