
import React, { useState } from 'react';

const CloserVerification = ({ goToNextStep}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      setMessage(`✅ File "${selectedFile.name}" uploaded successfully!`);
      
      // Simulate async upload or trigger goToNextStep directly
      setTimeout(() => {
        goToNextStep(); // Proceed to next step after successful "upload"
      }, 500);
    } else {
      setMessage("❌ Please select a file first.");
    }
  };

  return (
    <section className="bg-gray-100 py-10 min-h-[200px] p-4">
      <div className='text-start mb-4 flex items-center justify-between'>
        <p className='font-semibold'>Settlement Statement</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='flex items-center justify-center gap-10'>
          <div className="max-w-5xl w-full mx-auto bg-white p-6 rounded-lg shadow-md border-2 border-dashed border-gray-400 text-center">
            <label htmlFor="file-upload" className="cursor-pointer block">
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 105 105" fill="none" className='mx-auto mb-4'>
                <path d="M61.25 8.75H26.25C23.9294 8.75 21.7038 9.67187 20.0628 11.3128C18.4219 12.9538 17.5 15.1794 17.5 17.5V87.5C17.5 89.8206 18.4219 92.0462 20.0628 93.6872C21.7038 95.3281 23.9294 96.25 26.25 96.25H78.75C81.0706 96.25 83.2962 95.3281 84.9372 93.6872C86.5781 92.0462 87.5 89.8206 87.5 87.5V35L61.25 8.75Z" stroke="#BEC0CD" strokeWidth="2" />
                <path d="M61.25 8.75V35H87.5" stroke="#BEC0CD" strokeWidth="2" />
                <path d="M70 56.875H35" stroke="#BEC0CD" strokeWidth="2" />
                <path d="M70 74.375H35" stroke="#BEC0CD" strokeWidth="2" />
                <path d="M43.75 39.375H35" stroke="#BEC0CD" strokeWidth="2" />
              </svg>
              <div className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition inline-block">
                Upload Documents
              </div>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                onChange={handleFileChange}
                className="sr-only"
              />
            </label>

            {selectedFile && (
              <p className="mt-4 text-sm text-gray-700">
                ✅ Selected file: <span className="font-medium">{selectedFile.name}</span>
              </p>
            )}

            {message && (
              <p className={`mt-4 text-sm ${message.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
            )}
          </div>
        </div>

        <div className='flex items-center justify-end mt-6'>
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default CloserVerification;
