import React, { useState } from 'react';
import BuildingImage from '../assets/building-1.svg';
import PhoneNumber from './PhoneNumber';
import OtpForm from './OtpForm';
import ProofOfFunds from './ProofOfFunds';
import DriverLicense from './DriverLicense';
import BussinessVerification from './BussinessVerification';
import CloserVerification from './CloserVerification';
import AdminVerified from './AdminVerified';

const Hero = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: 'Phone Verification' },
    { id: 2, label: 'Proof of Funds' },
    { id: 3, label: 'ID/Drivers License' },
    { id: 4, label: 'Business Verification' },
    { id: 5, label: 'Closer Verification' },
    { id: 6, label: 'Admin Verified' }
  ];

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <PhoneNumber />
            <OtpForm />
          </>
        );
      case 2:
        return <ProofOfFunds />;
      case 3:
        return <DriverLicense />;
      case 4:
        return <BussinessVerification />;
      case 5:
        return <CloserVerification />;
      case 6:
        return <AdminVerified />;
      default:
        return null;
    }
  };

  return (
    <section className="bg-gray-100 py-10 relative min-h-[800px]">
      <div className="max-w-5xl mx-auto text-center">
        {/* <h1 className="text-3xl font-bold mb-8">Verification Steps</h1> */}

        {/* Stepper */}
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex-1 flex items-center relative">
              <button
                onClick={() => setCurrentStep(step.id)}
                className={`w-10 h-10 rounded-full flex items-center text-sm justify-center text-white font-semibold focus:outline-none transition-all duration-300 ${
                  currentStep === step.id ? 'bg-blue-600 scale-110' : 'bg-gray-400'
                }`}
              >
                {step.id}
              </button>

              <div className="absolute top-12 left-1/3 transform -translate-x-15 text-sm font-medium text-gray-700">
                {step.label}
              </div>

              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 transition-all duration-300 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 w-[90%] max-w-5xl">
          {renderStepContent()}
        </div>
      </div>

      <div className='absolute bottom-0 left-10 w-[450px] h-auto object-contain z-0'>
        <img src={BuildingImage} alt='building' />
      </div>
      <div className='absolute bottom-0 right-10 w-[450px] h-auto object-contain z-0'>
        <img src={BuildingImage} alt='building' />
      </div>
    </section>
  );
};

export default Hero;
