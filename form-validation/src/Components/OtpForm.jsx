// import React, { useRef, useState, useEffect } from 'react';

// const OtpForm = ({oneTimePass}) => {
//   const [otp, setOtp] = useState(['', '', '', '']);
//   const [error, setError] = useState('');
//   const [step, setStep] = useState(1); // 
//   const [find, setFind] = useState(false);
//   const inputRefs = useRef([]);

//   const handleChange = (value, index) => {
//     if (!/^\d?$/.test(value)) return;
//     const updatedOtp = [...otp];
//     updatedOtp[index] = value;
//     setOtp(updatedOtp);

//     if (value && index < 3) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === 'Backspace' && !otp[index] && index > 0) {
//       inputRefs.current[index - 1].focus();
//     }
//   };

// const handleVerify = () => {
//   const filled = otp.every((digit) => digit !== '');
//   if (!filled) {
//     setError('Please enter all 4 digits of the OTP');
//     return;
//   }
//   // console.log(oneTimePass,"oneTimePasssss");

//   const enteredOtp = otp.join('');
//   // console.log(enteredOtp,"enteredOtp");
  
//     if (enteredOtp == oneTimePass) {
//       setError('');
//       setStep(2);
//       setFind(true); 
//       // console.log("successfull");
      
//     } else {
//       setError('Invalid OTP. Please try again.');
//       // console.log("fail");

//       setFind(false); 
//     }
// };

//   return (
//     <div className="max-w-5xl mt-5 p-6 bg-gray-200 rounded-lg shadow-lg mb-1">
//       {step === 1 && (
//         <>
//           <h2 className="text-sm font-semibold mb-4 text-start">Enter OTP</h2>

//           <div className="flex justify-between mt-4 border-t-2 border-t-gray-300 pt-4">
//             <div className="flex justify-center gap-4">
//               {otp.map((digit, index) => (
//                 <input
//                   key={index}
//                   ref={(el) => (inputRefs.current[index] = el)}
//                   type="text"
//                   maxLength="1"
//                   value={digit}
//                   onChange={(e) => handleChange(e.target.value, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                   className="w-12 h-12 bg-white border-2 border-gray-300 rounded text-center text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               ))}
//             </div>
//             <button
//                 onClick={handleVerify}
//                 disabled={!otp.every(d => d !== '')}
//                 className={`px-4 py-2 rounded-full transition 
//                   ${otp.every(d => d !== '') 
//                     ? 'bg-blue-600 text-white hover:bg-blue-700' 
//                     : 'bg-gray-300 text-gray-600 cursor-not-allowed'}
//                 `}
//               >
//                 Verify
//               </button>
//           </div>
          
//           {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//         </>
//       )}

//       {step === 2 && (
//         <div className="text-start">
//           <h2 className="text-2xl font-bold text-green-700">✅ OTP Verified Successfully!</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OtpForm;
