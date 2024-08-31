import React, { useState } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import msgImg from '../../images/send-mail 1.png';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const handleSendClick = () => {
    setIsModalOpen(true);
    setAnimationClass('animate-fade-in');
    setTimeout(() => {
      setAnimationClass('');
    }, 1000); // Adjust duration to match animation time
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto max-w-7xl px-8 2xl:max-w-screen-2xl mb-7">
      <div className="flex flex-col md:flex-row gap-6">
        {/* First Column - Map */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.751089481183!2d44.323002076303075!3d33.30152507947668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDE4JzA1LjUiTiA0NMKwMTknMzAuNyJF!5e0!3m2!1sen!2sus!4v1693494374967!5m2!1sen!2sus"
              style={{ border: 0, width: '100%', height: '500px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="object-cover rounded-lg"
              title="Google Map Location"
            ></iframe>
          </div>
          {/* Two Columns of Text Below the Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Text Column 1 */}
            <div className="flex items-center space-x-4">
              <div className="bg-secondary flex justify-center items-center w-12 h-12 rounded-full p-3">
                <EnvelopeIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-textspan mb-1">Contact us at</p>
                <p className="text-sm font-semibold">
                  info@endlessbuilding.com
                </p>
              </div>
            </div>
            {/* Text Column 2 */}
            <div className="flex items-center space-x-4">
              <div className="bg-secondary flex justify-center items-center w-12 h-12 rounded-full p-3">
                <EnvelopeIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-textspan mb-1">Contact us at</p>
                <p className="text-sm font-semibold">
                  mahmoud@endlessbuilding.org
                </p>
              </div>
            </div>
          </div>
          {/* Two Columns of Text Below the Map */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Phone Column 1 */}
            <div className="flex items-center space-x-4">
              <div className="bg-secondary flex justify-center items-center w-12 h-12 rounded-full p-3">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-textspan mb-1">Whatsapp</p>
                <p className="text-sm font-semibold">009647855999989</p>
              </div>
            </div>
            {/* Phone Column 2 */}
            <div className="flex items-center space-x-4">
              <div className="bg-secondary flex justify-center items-center w-12 h-12 rounded-full p-3">
                <PhoneIcon className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <p className="text-lg text-textspan mb-1">Whatsapp</p>
                <p className="text-sm font-semibold">009647755999989</p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Column - Contact Form */}
        <div className="flex-1 flex flex-col" style={{ minHeight: '500px' }}>
          <div className="flex flex-col h-full">
            <p className="text-secondary mb-4 text-2xl font-bold">Contact Us</p>
            <p className="mb-4 text-2xl font-bold">Let's Connect!</p>
            <p className="mb-6" style={{ fontSize: '14px' }}>
              Let's connect and bring your vision to life. Fill out the form
              below to get in touch with us. We're eager to hear about your
              ideas, answer your questions, and explore how we can collaborate.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <h5 className="text-lg font-medium mb-2">Name</h5>
                <input
                  type="text"
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-lg font-medium mb-2">Email</h5>
                <input
                  type="email"
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="flex flex-col">
                <h5 className="text-lg font-medium mb-2">Company Name</h5>
                <input
                  type="text"
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <h5 className="text-lg font-medium mb-2">Number</h5>
                <PhoneInput
                  defaultCountry="US"
                  className="px-4 py-2 border-2 border-gray-300 rounded-lg w-full focus:border-secondary focus:outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <h5 className="text-lg font-medium mb-2">Description</h5>
              <textarea
                rows="4"
                className="px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-secondary focus:outline-none"
              />
            </div>
            <button
              type="button"
              onClick={handleSendClick}
              className="w-32 py-2 px-3 rounded-md bg-main text-base text-white hover:bg-secondary transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white mt-auto"
            >
              Send
            </button>
          </div>
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
