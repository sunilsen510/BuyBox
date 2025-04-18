// import { useEffect, useRef, useState } from "react";
// import BuildingImage from "../assets/building-1.svg";

// const Hero = ({ stepsConfig = [] }) => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isComplete, setIsComplete] = useState(false);
//   const [stepCompletion, setStepCompletion] = useState({});
//   const [margins, setMargins] = useState({
//     marginLeft: 0,
//     marginRight: 0,
//   });
// console.log(currentStep,"currentStep");

//   const [isPhoneVerified, setIsPhoneVerified] = useState(false);
//   const [ProofOfFunds, setProofOfFunds] = useState(false); // ✅ New state
//    // ✅ New state
//   const stepRef = useRef([]);

//   useEffect(() => {
//     setMargins({
//       marginLeft: stepRef.current[0]?.offsetWidth / 2 || 0,
//       marginRight: stepRef.current[stepsConfig.length - 1]?.offsetWidth / 2 || 0,
//     });
//   }, [stepsConfig.length]);

//   const handleNext = () => {
//     setCurrentStep((prevStep) => {
//       if (prevStep < stepsConfig.length) {
//         return prevStep + 1;
//       } else {
//         setIsComplete(true);
//         return prevStep;
//       }
//     });
//   };
  

//   const calculateProgressBarWidth = () => {
//     return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
//   };

//   // const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

//   const ActiveComponent = stepsConfig[currentStep - 1]?.Component;

//   const stepName = stepsConfig[currentStep - 1]?.name;
//   console.log(stepName,"stepName");
  

//   const setStepComplete = (isComplete) => {
//     setStepCompletion((prev) => ({ ...prev, [stepName]: isComplete }));
//   };

//   if (!stepsConfig.length) return null;
// const handleverifed = ()=>{
//   setIsPhoneVerified(true)
//   setProofOfFunds(tru)
// }

//   return (
//     <div className="relative min-h-screen bg-gray-100 p-6 pt-12">
//       {/* Stepper */}
//       <div className="relative flex items-center justify-between mb-12 max-w-5xl mx-auto">
//         {stepsConfig.map((step, index) => {

//           const isActive = currentStep === index + 1;
//           const isCompleted = currentStep > index + 1 || isComplete;
//         {console.log(isCompleted,"isCompleted")}

//           return (
//             <div
//               key={step.name}
//               ref={(el) => (stepRef.current[index] = el)}
//               className="flex flex-col items-center flex-1 relative"
//             >
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition duration-300 z-10
//                 ${
//                   isCompleted
//                     ? "bg-green-500 text-white"
//                     : isActive
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-300 text-gray-600"
//                 }`}
//               >
//                 {isCompleted ? "✓" : index + 1}
//               </div>
//               <span className="mt-2 text-sm text-center font-medium text-gray-700">
//                 {step.name}
//               </span>
//             </div>
//           );
//         })}

//         {/* Progress Line */}
//         <div
//           className="absolute top-5 left-0 h-1 bg-gray-300 w-[calc(100%-185px)] z-0"
//           style={{
//             marginLeft: `${margins.marginLeft}px`,
//             marginRight: `${margins.marginRight}px`,
//           }}
//         >
//           <div
//             className="h-full bg-blue-600 transition-all duration-300"
//             style={{ width: `${calculateProgressBarWidth()}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Step Component */}
//       <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto">
//         {ActiveComponent &&
//           <ActiveComponent
//             onVerified={ handleverifed} // ✅ Pass onVerified to step components
//             setStepComplete={setStepComplete}
//           />
//         }

        

//         {/* Next Button */}
//         {/* {!isComplete && (
//           <div className="mt-8 text-right">
//             <button
//               onClick={handleNext}
//               disabled={currentStep ==1 && !isPhoneVerified}
//               className={`px-6 py-2 rounded-full font-semibold shadow-md transition 
//                 ${
//                   currentStep === 1 && !isPhoneVerified
//                     ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                     : "bg-blue-600 hover:bg-blue-700 text-white"
//                 }
//               `}
//             >
//               {currentStep === stepsConfig.length ? "Finish" : "Next"}
//             </button>
//           </div>
//         )} */}

//         {/* Next Button */}
// {/* {!isComplete && (
//   <div className="mt-8 text-right">
//     <button
//       onClick={handleNext}
//       disabled={
//         (currentStep === 1 && !isPhoneVerified && !ProofOfFunds) ||
//         (currentStep !== 1 && !stepCompletion[stepName])
//       }
//       className={`px-6 py-2 rounded-full font-semibold shadow-md transition 
//         ${
//           (currentStep === 1 && !isPhoneVerified && !ProofOfFunds) ||
//           (currentStep !== 1 && !stepCompletion[stepName])
//             ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//             : "bg-blue-600 hover:bg-blue-700 text-white"
//         }
//       `}
//     >
//       {currentStep === stepsConfig.length ? "Finish" : "Next"}
//     </button>
//   </div>
// )} */}


// {!isComplete && (
//   <div className="mt-8 text-right">
//     <button
//       onClick={handleNext}
//       disabled={
//         (currentStep === 1 && !isPhoneVerified) || // Disable if phone is not verified
//         (currentStep !== 1 && !stepCompletion[stepName]) // Disable if current step is not complete
//       }
//       className={`px-6 py-2 rounded-full font-semibold shadow-md transition 
//         ${
//           (currentStep === 1 && !isPhoneVerified) || 
//           (currentStep !== 1 && !stepCompletion[stepName])
//             ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//             : "bg-blue-600 hover:bg-blue-700 text-white"
//         }
//       `}
//     >
//       {currentStep === stepsConfig.length ? "Finish" : "Next"}
//     </button>
//   </div>
// )}


//       </div>

//       {/* Background Images */}
//       <div className="absolute bottom-0 left-10 w-[450px] h-auto object-contain z-0">
//         <img src={BuildingImage} alt="building" />
//       </div>
//       <div className="absolute bottom-0 right-10 w-[450px] h-auto object-contain z-0">
//         <img src={BuildingImage} alt="building" />
//       </div>
//     </div>
//   );
// };

// export default Hero;



// import { useEffect, useRef, useState } from "react";
// import BuildingImage from "../assets/building-1.svg";

// const Hero = ({ stepsConfig = [] }) => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isComplete, setIsComplete] = useState(false);
//   const [stepCompletion, setStepCompletion] = useState({});
//   const [margins, setMargins] = useState({
//     marginLeft: 0,
//     marginRight: 0,
//   });
//   const [isPhoneVerified, setIsPhoneVerified] = useState(false);
//   const [proofOfFunds, setProofOfFunds] = useState(false);
//   const [driversVerified, setDriversVerified] = useState(false);
//   const [bussinessVerified, setBussinessVerified] = useState(false);
//   const [closerVerified, setCloserVerified] = useState(false);
//   const [adminVerified, setAdminVerified] = useState(false)

//   const stepRef = useRef([]);

//   useEffect(() => {
//     setMargins({
//       marginLeft: stepRef.current[0]?.offsetWidth / 2 || 0,
//       marginRight: stepRef.current[stepsConfig.length - 1]?.offsetWidth / 2 || 0,
//     });
//   }, [stepsConfig.length]);

//   const handleNext = () => {
//     setCurrentStep((prevStep) => {
//       if (prevStep < stepsConfig.length) {
//         return prevStep + 1;
//       } else {
//         setIsComplete(true);
//         return prevStep;
//       }
//     });
//   };

//   const calculateProgressBarWidth = () => {
//     return ((currentStep - 1) / (stepsConfig.length - 1)) * 100;
//   };

//   const ActiveComponent = stepsConfig[currentStep - 1]?.Component;
//   const stepName = stepsConfig[currentStep - 1]?.name;

//   const setStepComplete = (isComplete) => {
//     setStepCompletion((prev) => ({ ...prev, [stepName]: isComplete }));
//   };

//   const handleVerified = () => {
//     // Handling verification step completion
//     if (currentStep === 1) setIsPhoneVerified(true);
//     if (currentStep === 2) setProofOfFunds(true);
//     if (currentStep === 3) setDriversVerified(true);
//     if (currentStep === 4) setBussinessVerified(true);
//     if (currentStep === 5) setCloserVerified(true);
//     if (currentStep === 6) setAdminVerified(true);

//     // Mark the current step as completed
//     setStepComplete(true);
//   };

//   console.log((currentStep === 1 && !isPhoneVerified) || // Disable if phone is not verified
//   (currentStep === 2 && !proofOfFunds) || // Disable if Proof of Funds is not completed
//   (currentStep === 3 && !driversVerified) || // Disable if drivers are not verified
//   (currentStep === 4 && !bussinessVerified) || 
//   (currentStep === 5 && !closerVerified) ||
//   (currentStep === 6 && !adminVerified) ||
//   (currentStep !== 1 && !stepCompletion[stepName]), "Disable")

//   if (!stepsConfig.length) return null;

//   return (
//     <div className="relative min-h-screen bg-gray-100 p-6 pt-12">
//       {/* Stepper */}
//       <div className="relative flex items-center justify-between mb-12 max-w-5xl mx-auto">
//         {stepsConfig.map((step, index) => {
//           const isActive = currentStep === index + 1;
//           const isCompleted = currentStep > index + 1 || isComplete;

//           return (
//             <div
//               key={step.name}
//               ref={(el) => (stepRef.current[index] = el)}
//               className="flex flex-col items-center flex-1 relative"
//             >
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition duration-300 z-10
//                 ${isCompleted
//                     ? "bg-green-500 text-white"
//                     : isActive
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-300 text-gray-600"
//                 }`}
//               >
//                 {isCompleted ? "✓" : index + 1}
//               </div>
//               <span className="mt-2 text-sm text-center font-medium text-gray-700">
//                 {step.name}
//               </span>
//             </div>
//           );
//         })}

//         {/* Progress Line */}
//         <div
//           className="absolute top-5 left-0 h-1 bg-gray-300 w-[calc(100%-185px)] z-0"
//           style={{
//             marginLeft: `${margins.marginLeft}px`,
//             marginRight: `${margins.marginRight}px`,
//           }}
//         >
//           <div
//             className="h-full bg-blue-600 transition-all duration-300"
//             style={{ width: `${calculateProgressBarWidth()}%` }}
//           ></div>
//         </div>
//       </div>

//       {/* Step Component */}
//       <div className="bg-white shadow-lg rounded-lg p-6 max-w-5xl mx-auto">
//         {ActiveComponent && (
//           <ActiveComponent
//             onVerified={handleVerified} // Pass handleVerified to step components
//             setStepComplete={setStepComplete}
//           />
//         )}

//         {/* Next Button */}
//         {
//         !isComplete && (
//         <div className="mt-8 text-right">
//           <button
//             onClick={handleNext}
//             disabled={
//               (currentStep === 1 && !isPhoneVerified) || // Disable if phone is not verified
//               (currentStep === 2 && !proofOfFunds) || // Disable if Proof of Funds is not completed
//               (currentStep === 3 && !driversVerified) || // Disable if drivers are not verified
//               (currentStep === 4 && !bussinessVerified) || 
//               (currentStep === 5 && !closerVerified) ||
//               (currentStep === 6 && !adminVerified) ||
//               (currentStep !== 1 && !stepCompletion[stepName]) // Disable if current step is not complete
//             }
//             className={`px-6 py-2 rounded-full font-semibold shadow-md transition 
//               ${
//                 (currentStep === 1 && !isPhoneVerified) || 
//                 (currentStep === 2 && !proofOfFunds) || 
//                 (currentStep === 3 && !driversVerified) ||
//                 (currentStep === 4 && !bussinessVerified) || 
//                 (currentStep === 5 && !closerVerified) ||
//                 (currentStep === 6 && !adminVerified) ||
//                 (currentStep !== 1 && !stepCompletion[stepName])
//                   ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700 text-white"
//               }
//             `}
//           >
//             {currentStep === stepsConfig.length ? "Finish" : "Next"}
//           </button>
//         </div>
//         )
//         }
//       </div>

//       {/* Background Images */}
//       <div className="absolute bottom-0 left-10 w-[450px] h-auto object-contain z-0">
//         <img src={BuildingImage} alt="building" />
//       </div>
//       <div className="absolute bottom-0 right-10 w-[450px] h-auto object-contain z-0">
//         <img src={BuildingImage} alt="building" />
//       </div>
//     </div>
//   );
// };

// export default Hero;



import { useEffect, useRef, useState } from "react";
import BuildingImage from "../assets/building-1.svg";

const Hero = ({ stepsConfig = [] }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [stepCompletion, setStepCompletion] = useState({});
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [proofOfFunds, setProofOfFunds] = useState(false);
  const [driversVerified, setDriversVerified] = useState(false);
  const [bussinessVerified, setBussinessVerified] = useState(false);
  const [closerVerified, setCloserVerified] = useState(false);
  const [adminVerified, setAdminVerified] = useState(false);

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
  const stepName = stepsConfig[currentStep - 1]?.name;

  const setStepComplete = (isComplete) => {
    setStepCompletion((prev) => ({ ...prev, [stepName]: isComplete }));
  };

  // Centralized verification setter logic
  const verificationSetters = {
    1: setIsPhoneVerified,
    2: setProofOfFunds,
    3: setDriversVerified,
    4: setBussinessVerified,
    5: setCloserVerified,
    6: setAdminVerified,
  };

  const handleVerified = () => {
    const setter = verificationSetters[currentStep];
    if (setter) setter(true);
    setStepComplete(true);
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !isPhoneVerified;
      case 2:
        return !proofOfFunds;
      case 3:
        return !driversVerified;
      case 4:
        return !bussinessVerified;
      case 5:
        return !closerVerified;
      case 6:
        return !adminVerified;
      default:
        return !stepCompletion[stepName];
    }
  };

  if (!stepsConfig.length) return null;

  return (
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
                ${isCompleted
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
          className="absolute top-5 left-0 h-1 bg-gray-300 w-[calc(100%-185px)] z-0"
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
        {ActiveComponent && (
          <ActiveComponent
            onVerified={handleVerified}
            setStepComplete={setStepComplete}
            goToNextStep={handleNext}
          />
        )}

        {/* Next Button */}
        {!isComplete && (
          <div className="mt-8 text-right">
            <button
              onClick={handleNext}
              disabled={isNextDisabled()}
              className={`px-6 py-2 rounded-full font-semibold shadow-md transition 
                ${isNextDisabled()
                  ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
                }
              `}
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
  );
};

export default Hero;
