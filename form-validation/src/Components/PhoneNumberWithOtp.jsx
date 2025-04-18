import React, { useRef, useState } from 'react';

const PhoneNumberWithOtp = ({ onVerified }) => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [otpError, setOtpError] = useState('');
  const [sent, setSent] = useState(false);
  const [otpStep, setOtpStep] = useState(1);
  const [generatedOtp, setGeneratedOtp] = useState(null);

  const inputRefs = useRef([]);

  const validatePhone = (value) => /^[6-9]\d{9}$/.test(value);

  const handleSendOtp = () => {
    if (!validatePhone(phone)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    const newOtp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(newOtp);
    setSent(true);
    setError('');
    alert(`OTP sent to ${phone}: ${newOtp}`);
  };

  const handleResend = () => {
    if (!validatePhone(phone)) {
      setError('Please enter a valid phone number before resending');
      return;
    }
    if (!generatedOtp) return;
    alert(`OTP resent to ${phone}: ${generatedOtp}`);
  };

  const handleOtpChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const userOtp = otp.join('');
    if (userOtp.length !== 4) {
      setOtpError('Please enter all 4 digits of the OTP');
      return;
    }
    if (userOtp == generatedOtp) {
      setOtpStep(2);
      setOtpError('');
      onVerified?.(); // call parent callback
    } else {
      setOtpError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Phone Input */}
      <div className="p-6 bg-gray-200 rounded-lg shadow-lg">
        <h6 className="font-semibold mb-4 text-sm text-start">Phone Number</h6>
        <div className="flex items-center gap-4">
          <input
            type="tel"
            placeholder="123-456-7890"
            className="flex-1 border border-gray-300 bg-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            onClick={handleSendOtp}
            className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Send
          </button>
          <button
            onClick={handleResend}
            disabled={!sent}
            className={`px-4 py-2 rounded-full transition ${
              sent
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-gray-300 text-gray-600 cursor-not-allowed'
            }`}
          >
            Resend
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      {/* OTP Form */}
      <div className="p-6 bg-gray-200 rounded-lg shadow-lg">
        {otpStep === 1 && (
          <>
            <h6 className="text-sm font-semibold mb-4 text-start">Enter OTP</h6>
            <div className="flex items-center gap-4 justify-between">
              <div className="flex gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleOtpChange(e.target.value, index)}
                    onKeyDown={(e) => handleOtpKeyDown(e, index)}
                    className="w-12 h-12 text-center bg-white border-2 border-gray-300 rounded text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))}
              </div>
              <button
                onClick={handleVerifyOtp}
                className={`px-4 py-2 rounded-full transition ${
                  otp.every((d) => d !== '')
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              >
                Verify
              </button>
            </div>
            {otpError && <p className="text-red-500 text-sm mt-2">{otpError}</p>}
          </>
        )}
        {otpStep === 2 && (
          <div className="text-start">
            <h2 className="text-2xl font-bold text-green-700">✅ OTP Verified Successfully!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneNumberWithOtp;

