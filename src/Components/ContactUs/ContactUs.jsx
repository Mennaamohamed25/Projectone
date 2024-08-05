import React, { useState } from 'react';
import contactImg from '../../images/contact.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import msgImg from '../../images/send-mail 1.png';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const handleSendClick = () => {
    setIsModalOpen(true);
    setAnimationClass('animate-fade-in');
    // Reset animation after it finishes
    setTimeout(() => {
      setAnimationClass('');
    }, 1000); // Adjust duration to match animation time
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* First Column */}
        <div className="md:col-span-5 flex items-center justify-center">
          <img
            src={contactImg}
            alt="Contact Us"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Second Column */}
        <div className="md:col-span-7 flex flex-col space-y-6 justify-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <h5 className="text-lg font-medium mb-2">Name</h5>
              <input
                type="text"
                className="px-4 py-2 border-2 border-solid border-secondary rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h5 className="text-lg font-medium mb-2">Email</h5>
              <input
                type="email"
                className="px-4 py-2 border-2 border-solid border-secondary rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col flex-1">
              <h5 className="text-lg font-medium mb-2">Company Name</h5>
              <input
                type="text"
                className="px-4 py-2 border-2 border-solid border-secondary rounded-lg"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h5 className="text-lg font-medium mb-2">Number</h5>
              <PhoneInput
                defaultCountry="US"
                className="px-4 py-2 border-2 border-solid border-secondary rounded-lg w-full"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h5 className="text-lg font-medium mb-2">Description</h5>
            <textarea
              rows="4"
              className="px-4 py-2 border-2 border-solid border-secondary rounded-lg"
            />
          </div>
          <button
            type="button"
            onClick={handleSendClick}
            className="w-32 py-2 px-3 rounded-md bg-main text-base text-white hover:bg-secondary transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
          >
            Send
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 ${animationClass}`}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90vw] md:w-[590px]">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img src={msgImg} alt="Thank You" className="w-32 h-auto mb-4" />
              <p className="text-xl mb-4 font-extrabold">Thank You</p>
              <p className="text-lg">Your message has been sent</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
