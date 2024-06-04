// pages/trips/add.tsx
import React from 'react';
// import MultiStepForm from '@/components/forms/MultiStepForm';
import WizardForm from "@/components/forms/WizardForm";

const AddTripPage = () => {
    return (
        <div className="container mx-auto p-2">
            <h1 className="text-2xl text-center font-bold">Add a New Trip</h1>
            <WizardForm />
        </div>
    );
};

export default AddTripPage;
