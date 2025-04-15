import React, { useState } from 'react';

const ProofOfFunds = () => {
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
    <section className="bg-gray-100 py-10 min-h-[800px]">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Upload Proof of Funds</h1>

        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="block mb-2 text-sm font-medium text-gray-700">Choose File</span>
            <input
              type="file"
              onChange={handleFileChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-600 file:text-white
                hover:file:bg-blue-700"
            />
          </label>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Upload
          </button>

          {selectedFile && (
            <p className="mt-4 text-sm text-gray-700">
              ✅ Selected file: <span className="font-medium">{selectedFile.name}</span>
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ProofOfFunds;
