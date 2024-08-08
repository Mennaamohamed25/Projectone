import React, { useState } from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
} from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import '../../index.css';
import logoImage from '../../images/logo.png';
import { Link, useLocation } from 'react-router-dom';

const services = [
  { name: 'Construction', href: 'construction' },
  { name: 'Oil & Gas', href: 'gas' },
  { name: 'Industrial', href: 'industrial' },
  { name: 'Investments', href: 'investments' },
  { name: 'Healthcare', href: 'healthcare' },
  { name: 'Consumer & Real Estate', href: 'consumer' },
  { name: 'Information Technology', href: 'technology' },
  { name: 'Food and Beverage', href: 'food' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const location = useLocation();

  // Determine if 'Services' is active
  const isServicesActive = location.pathname.includes('services');
  // Determine if 'Home' is active
  const isHomeActive = location.pathname === '/';

  const handleServiceSelect = (service) => {
    setSelectedService(service.href);
  };

  return (
    <Disclosure as="nav" className="my-6">
      <div className="mx-auto max-w-7xl px-8">
        <div className="relative flex items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              alt="Your Company"
              src={logoImage}
              className="md:h-auto sm:h-8 xsmall:h-8 w-auto"
            />
          </Link>

          {/* Navigation links for larger screens */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4 sm:ml-6 flex-grow">
            <Link
              to="/"
              aria-current="page"
              className={classNames(
                isHomeActive
                  ? 'text-secondary'
                  : 'text-primary-300 hover:text-secondary transition duration-300 ease-in-out',
                'rounded-md px-3 py-2 text-sm font-medium'
              )}
            >
              Home
            </Link>
            {/* Dropdown Menu for Services */}
            <Menu as="div" className="relative">
              {({ open }) => {
                if (open !== isServicesOpen) {
                  setIsServicesOpen(open);
                }
                return (
                  <>
                    <Menu.Button
                      className={classNames(
                        'inline-flex items-center px-3 py-2 text-sm font-medium rounded-md transition duration-300 ease-in-out',
                        isServicesActive
                          ? 'text-secondary'
                          : 'text-primary hover:text-secondary'
                      )}
                    >
                      Services
                      <ChevronDownIcon
                        className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                          open ? 'transform rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </Menu.Button>
                    <Menu.Items
                      className={`absolute left-0 z-10 mt-2 w-48 origin-top-right bg-dropdown border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-300 ease-in-out ${
                        open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                      }`}
                    >
                      {services.map((service) => (
                        <Menu.Item key={service.name}>
                          {({ active }) => (
                            <Link
                              to={service.href}
                              onClick={() => handleServiceSelect(service)}
                              className={classNames(
                                selectedService === service.href
                                  ? 'bg-secondary text-white'
                                  : 'text-primary',
                                'block px-4 py-2 text-sm transition duration-300 ease-in-out'
                              )}
                            >
                              {service.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </>
                );
              }}
            </Menu>
          </div>

          {/* Contact Us button for larger screens */}
          <div className="hidden sm:block sm:ml-6 flex-shrink-0">
            <Link
              to="/contact/*"
              className="relative rounded-md bg-main py-2 px-3 text-base text-white hover:bg-secondary transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition duration-300 ease-in-out">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            as={Link}
            to="/"
            aria-current="page"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
          >
            Home
          </DisclosureButton>
          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton
                  as="button"
                  className="flex items-center w-full px-3 py-2 text-base font-medium text-primary hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
                >
                  Services
                  <ChevronDownIcon
                    className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                      open ? 'transform rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel
                  className={`space-y-1 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg transition-transform duration-300 ease-in-out ${
                    open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                  }`}
                >
                  {services.map((service) => (
                    <DisclosureButton
                      key={service.name}
                      as={Link}
                      to={service.href}
                      onClick={() => handleServiceSelect(service)}
                      className={classNames(
                        selectedService === service.href
                          ? 'bg-secondary text-white'
                          : 'text-gray-700 hover:bg-gray-100',
                        'block px-4 py-2 text-sm transition duration-300 ease-in-out'
                      )}
                    >
                      {service.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
          {/* Contact Us button in mobile menu */}
          <DisclosureButton
            as={Link}
            to="/contact/*"
            className="block rounded-md bg-main px-3 py-2 text-base font-medium text-white hover:bg-secondary transition duration-300 ease-in-out"
          >
            Contact Us
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
