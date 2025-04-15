import React, { useState } from 'react';
import BuildingImage from '../assets/building-1.svg';
import PhoneNumber from './phoneNumber';
import OtpForm from './OtpForm';
import ProofOfFunds from './ProofOfFunds';

const Hero = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: 'Phone Verification' },
    { id: 2, label: 'Proof of Funds' },
    { id: 3, label: 'ID/Drivers License' },
    { id: 4, label: 'Business Verification' },
    { id: 5, label: 'Closer Verification' },
    { id: 6, label: ' admin verified' }
  ];

  return (
    <>
      <section className="bg-gray-100 py-10 relative min-h-[800px]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-8"></h1>
          {/* Stepper */}
          <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex-1 flex items-center relative">
                {/* Clickable Circle */}
                <button
                  onClick={() => setCurrentStep(step.id)}
                  className={`w-10 h-10 rounded flex items-center text-sm justify-center text-white font-semibold focus:outline-none transition-all duration-300 ${
                    currentStep === step.id ? 'bg-blue-600 scale-110' : 'bg-gray-400'
                  }`}
                >
                  {step.id}
                </button>

                {/* Label */}
                <div className="absolute top-12 left-0 transform -translate-x-4 text-sm font-medium text-gray-700">
                  {step.label}
                </div>

                {/* Line */}
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
          <div className="mt-10 text-lg font-medium text-gray-800 py-10">
            {currentStep === 1 && <p>Step 1: Phone Verification</p>}
            {currentStep === 2 && <p>Step 2: Proof of Funds</p>}
            {currentStep === 3 && <p>Step 3: ID/Driver’s License</p>}
            {currentStep === 4 && <p>Step 4: Business Verification</p>}
            {currentStep === 5 && <p>Step 5: Closer Verification</p>}
            {currentStep === 6 && <p>Step 6: admin verified</p>}
          </div>
        </div>
        <div className='bg-white shadow:lg max-w-5xl mx-auto py-2 px-2 rounded-xl'>
          <PhoneNumber />
          <OtpForm /> 
        </div>
       
        <div className='absolute bottom-0 left-10 w-[450px] h-auto object-contain z-0'>
          <img src={ BuildingImage } alt='buildingImage'/>
        </div>
        <div className='absolute bottom-0 right-10 w-[450px] h-auto object-contain z-0'>
          <img src={ BuildingImage } alt='buildingImage'/>
        </div>
      </section>
    </> 
  );
};

export default Hero;
