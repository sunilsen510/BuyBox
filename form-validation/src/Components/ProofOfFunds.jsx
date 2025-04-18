import React, { useState } from 'react';

const ProofOfFunds = ({ goToNext }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [proofName, setProofName] = useState('');
  const [savedData, setSavedData] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!selectedFile || !proofName) {
      alert('Please fill out both the proof name and upload a file.');
      return;
    }
    setSavedData({ proofName, file: selectedFile });
    alert('Data saved successfully!');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!savedData) {
      alert('Please save your data before submitting.');
      return;
    }
    alert(`Proof "${savedData.proofName}" with file "${savedData.file.name}" submitted.`);
    goToNext(); // Move to next step
  };

  return (
    <>
    <section className="bg-gray-100 py-10 px-4 min-h-[300px]">
        <div className='text-start mb-4 flex items-center justify-between'>
          <p className='font-semibold'>Bank Statement</p>
          <p className='font-semibold text-start'>Proof Of Funds</p>
       </div>
      <form onSubmit={handleSubmit} className="flex gap-10 flex-wrap">
        {/* File Upload */}
        <div className="flex-1 min-w-[300px] bg-white p-8 rounded shadow border-2 border-dashed border-gray-300">
        <label htmlFor="file-upload" className="block cursor-pointer">
        <div className="relative w-[105px] h-[105px] mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="105"
            height="105"
            viewBox="0 0 105 105"
            fill="none"
          >
            <path d="M61.25 8.75H26.25C23.9294 8.75 21.7038 9.67187 20.0628 11.3128C18.4219 12.9538 17.5 15.1794 17.5 17.5V87.5C17.5 89.8206 18.4219 92.0462 20.0628 93.6872C21.7038 95.3281 23.9294 96.25 26.25 96.25H78.75C81.0706 96.25 83.2962 95.3281 84.9372 93.6872C86.5781 92.0462 87.5 89.8206 87.5 87.5V35L61.25 8.75Z" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M61.25 8.75V35H87.5" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M70 56.875H35" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M70 74.375H35" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M43.75 39.375H39.375H35" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

            {/* Centered Button */}
            <span className=" whitespace-nowrap overflow-hidden text-ellipsis absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition">
              Upload a File
            </span>

            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

              {/* File name below */}
              {selectedFile && (
                <p className="mt-4 text-sm text-center text-gray-700">
                  ✅ <strong>{selectedFile.name}</strong> selected
                </p>
              )}
          </label>
        </div>

        {/* Name Input */}
          
        <div className="flex-1 min-w-[300px] bg-gray-100 p-4 rounded">
          <input
            type="text"
            placeholder="Name this proof of funds"
            className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={proofName}
            onChange={(e) => setProofName(e.target.value)}
          />
          <button
            type="button"
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Save
          </button>
        </div>

        {/* Submit Button */}
        <div className="w-full text-right mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </section>

    </>
  );
};

export default ProofOfFunds;

