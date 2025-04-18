import { useEffect, useRef, useState } from "react";
import BuildingImage from "../assets/building-1.svg";

const Hero = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRef = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRef.current[0]?.offsetWidth / 2 || 0,
      marginRight: stepRef.current[stepsConfig.length - 1]?.offsetWidth / 2 || 0,
    });
  }, [stepsConfig.length]);

  const handleNext = () => {
    setCurrentStep((prevStep) => {
      if (prevStep < stepsConfig.length) {
        return prevStep + 1;
      } else {
        setIsComplete(true);
        return prevStep;
      }
    });
  };

  const calculateProgressBarWidth = () => {
    return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
  };

  const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

  if (!stepsConfig.length) return null;

  return (
    <>
     
     <div className="relative min-h-screen bg-gray-100 p-6 pt-12">
      {/* Stepper */}
      <div className="relative flex items-center justify-between mb-12 max-w-5xl mx-auto">
        {stepsConfig.map((step, index) => {
          const isActive = currentStep === index + 1;
          const isCompleted = currentStep > index + 1 || isComplete;

          return (
            <div
              key={step.name}
              ref={(el) => (stepRef.current[index] = el)}
              className="flex flex-col items-center flex-1 relative"
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition duration-300 z-10
                ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {isCompleted ? "✓" : index + 1}
              </div>
              <span className="mt-2 text-sm text-center font-medium text-gray-700">
                {step.name}
              </span>
            </div>
          );
        })}

        {/* Progress Line */}
            <div
              className="absolute top-5 left-0 h-1 bg-gray-300 w-full z-0"
              style={{
                marginLeft: `${margins.marginLeft}px`,
                marginRight: `${margins.marginRight}px`,
              }}
            >
              <div
                className="h-full bg-blue-600 transition-all duration-300"
                style={{ width: `${calculateProgressBarWidth()}%` }}
              ></div>
            </div>
      </div>

      {/* Step Component */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto">
        {ActiveComponent && <ActiveComponent />}



        {/* Next Button */}
      {!isComplete && (
        <div className="mt-8 text-right">
          <button
            onClick={handleNext}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold shadow-md transition"
          >
            {currentStep === stepsConfig.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
      </div>

      

      {/* Background Images */}
      <div className="absolute bottom-0 left-10 w-[450px] h-auto object-contain z-0">
        <img src={BuildingImage} alt="building" />
      </div>
      <div className="absolute bottom-0 right-10 w-[450px] h-auto object-contain z-0">
        <img src={BuildingImage} alt="building" />
      </div>
    </div>

    </>
  );
};

export default Hero;
