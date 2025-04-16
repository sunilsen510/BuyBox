import React, { useState } from 'react';

const PhoneNumber = () => {

    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [sent, setSent] = useState(false);

  const validatePhone = (value) => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(value);
  };

  const handleSend = () => {
    if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setError('');
    setSent(true);
    alert('OTP sent to ' + phone);
  };

  const handleResend = () => {
    if (!validatePhone(phone)) {
      setError('Please enter a valid phone number before resending');
      return;
    }
    alert('OTP resent to ' + phone);
  };


  return (
    <>
      <div className="max-w-5xl p-6 bg-gray-200 rounded-lg shadow-lg my-auto">
      <h6 className="font-semibold mb-4 text-sm text-start">Phone Number</h6>

      <div className='flex items-center gap-4 justify-center'>
      <input
        type="tel"
        placeholder="123-456-7890"
        className="w-full border border-gray-300 bg-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <div className="flex justify-between gap-4">
        <button
          onClick={handleSend}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Send
        </button>

        <button
          onClick={handleResend}
          disabled={!sent}
          className={`flex-1 px-4 py-2 rounded-full transition ${
            sent
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-600 cursor-not-allowed'
          }`}
        >
          Resend
        </button>
        </div>
      </div>
     </div>
    </>
  );
}

export default PhoneNumber;
