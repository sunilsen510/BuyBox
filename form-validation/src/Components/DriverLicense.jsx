import React, { useState } from 'react'

const DriverLicense = () => {
        const [selectedFile, setSelectedFile] = useState(null);
      
        const handleFileChange = (e) => {
          setSelectedFile(e.target.files[0]);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          if (selectedFile) {
            alert(`File "${selectedFile.name}" uploaded successfully!`);
            // Upload logic goes here...
          } else {
            alert("Please select a file first.");
          }
        };
  return (
    <>
       <section className="bg-gray-100 py-10 min-h-[00px] p-4">
      <div className='text-start mb-4 flex items-center justify-between'>
        <p className='font-semibold'>ID front</p>
        <p className='font-semibold'>ID Back</p>
      </div>
      <div className='flex items-center justify-between gap-10'>
        <div className="max-w-xl w-1/2 bg-white p-2 rounded-lg shadow-md border-2 border-dashed border-gray-400">
          <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center relative p-8">
            <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
              >
                
                <svg width="105" height="105" viewBox="0 0 161 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_1928_8924)">
                <circle cx="73.5" cy="73" r="40" fill="#00D859"/>
                </g>
                <path d="M92.6992 61.8L67.9492 86.6L56.6992 75.3273" stroke="white" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                <filter id="filter0_d_1928_8924" x="0.5" y="0" width="160" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="7" dy="7"/>
                <feGaussianBlur stdDeviation="20"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.847059 0 0 0 0 0.34902 0 0 0 0.3 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1928_8924"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1928_8924" result="shape"/>
                </filter>
                </defs>
                </svg>
                <span className='mt-4'>Document Verified</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
          </div>
            {selectedFile && (
              <p className="mt-4 text-sm text-gray-700">
                ✅ Selected file: <span className="font-medium">{selectedFile.name}</span>
              </p>
            )}
          </form>
        </div>
        <div className="max-w-xl w-1/2 bg-white p-2 rounded-lg shadow-md border-2 border-dashed border-gray-400">
          <form onSubmit={handleSubmit}>
          <div className="flex justify-center items-center relative p-8">
            <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105" fill="none" className='mb-4'>
                  <path d="M61.25 8.75H26.25C23.9294 8.75 21.7038 9.67187 20.0628 11.3128C18.4219 12.9538 17.5 15.1794 17.5 17.5V87.5C17.5 89.8206 18.4219 92.0462 20.0628 93.6872C21.7038 95.3281 23.9294 96.25 26.25 96.25H78.75C81.0706 96.25 83.2962 95.3281 84.9372 93.6872C86.5781 92.0462 87.5 89.8206 87.5 87.5V35L61.25 8.75Z" stroke="#BEC0CD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M61.25 8.75V35H87.5" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M70 56.875H35" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M70 74.375H35" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M43.75 39.375H39.375H35" stroke="#BEC0CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="whitespace-nowrap overflow-hidden text-ellipsis bg-blue-600 text-white px-4 py-2 rounded text-sm font-semibold hover:bg-blue-700 transition mt-4">Upload a file</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
          </div>
            {selectedFile && (
              <p className="mt-4 text-sm text-gray-700">
                ✅ Selected file: <span className="font-medium">{selectedFile.name}</span>
              </p>
            )}
          </form>
        </div>
      </div>
      <div className='flex items-center justify-end mt-10'>
        <button className="bg-blue-600 text-white px-4 p-8 py-2 rounded-full hover:bg-blue-700 transition text-right">Submit</button>
      </div>
    </section>
    </>
  )
}

export default DriverLicense
