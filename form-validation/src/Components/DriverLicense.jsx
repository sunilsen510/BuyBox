import React, { useState } from 'react';

const DriverLicense = () => {
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const handleFrontChange = (e) => {
    setFrontFile(e.target.files[0]);
  };

  const handleBackChange = (e) => {
    setBackFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (frontFile && backFile) {
      alert(`Files uploaded successfully: ${frontFile.name} & ${backFile.name}`);
      setIsSubmitted(true);
      setStep(2);
    } else {
      alert("Please upload both front and back ID files.");
    }
  };

  return (
    <section className="bg-gray-100 py-10 p-4">
      {step === 1 && (
        <>
          <div className='text-start mb-4 flex items-center justify-between'>
            <p className='font-semibold'>ID Front</p>
            <p className='font-semibold'>ID Back</p>
          </div>

          <div className='flex items-center justify-between gap-10'>
            {/* Front ID Upload */}
            <div className="max-w-xl w-1/2 bg-white p-8 rounded-lg shadow-md border-2 border-dashed border-gray-400 text-center">
              <label htmlFor="front-upload" className="cursor-pointer flex flex-col items-center">
                <svg width="105" height="105" viewBox="0 0 161 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1928_8924)">
                    <circle cx="73.5" cy="73" r="40" fill="#00D859" />
                  </g>
                  <path d="M92.6992 61.8L67.9492 86.6L56.6992 75.3273" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <filter id="filter0_d_1928_8924" x="0.5" y="0" width="160" height="160" filterUnits="userSpaceOnUse">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dx="7" dy="7" />
                      <feGaussianBlur stdDeviation="20" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.847059 0 0 0 0 0.34902 0 0 0 0.3 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1928_8924" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1928_8924" result="shape" />
                    </filter>
                  </defs>
                </svg>
                <span className="mt-2 text-lg font-bold text-black-600">Document Verified</span>
                <input id="front-upload" type="file" className="hidden" onChange={handleFrontChange} />
              </label>
              {frontFile && <p className="mt-2 text-sm">✅ {frontFile.name}</p>}
            </div>

            {/* Back ID Upload */}
            <div className="max-w-xl w-1/2 bg-white p-8 rounded-lg shadow-md border-2 border-dashed border-gray-400 text-center relative">
              <label htmlFor="back-upload" className="cursor-pointer flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105" fill="none">
                  <path d="M61.25 8.75H26.25C23.9294 8.75 21.7038 9.67187 20.0628 11.3128C18.4219 12.9538 17.5 15.1794 17.5 17.5V87.5C17.5 89.8206 18.4219 92.0462 20.0628 93.6872C21.7038 95.3281 23.9294 96.25 26.25 96.25H78.75C81.0706 96.25 83.2962 95.3281 84.9372 93.6872C86.5781 92.0462 87.5 89.8206 87.5 87.5V35L61.25 8.75Z" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M61.25 8.75V35H87.5" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M70 56.875H35" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M70 74.375H35" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M43.75 39.375H39.375H35" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="whitespace-nowrap overflow-hidden text-ellipsis bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition">Upload a file</span>
                <input id="back-upload" type="file" className="hidden" onChange={handleBackChange} />
              </label>
              {backFile && <p className="mt-2 text-sm">✅ {backFile.name}</p>}
            </div>
          </div>

          <div className='flex items-center justify-end mt-10'>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <div className="text-green-600 text-lg font-bold text-start">
          ✅ Documents Uploaded & Verified. Moving to Next Step...
        </div>
      )}
    </section>
  );
};

export default DriverLicense;

