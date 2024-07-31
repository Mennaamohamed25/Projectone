import React from 'react';
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

// NAVBAR DATA
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Blog', href: '#', current: false },
  { name: 'Careers', href: '#', current: false },
];

// DROPDOWN DATA
const services = [
  { name: 'Construction', href: '#' },
  { name: 'Oil & Gas', href: '#' },
  { name: 'Industrial', href: '#' },
  { name: 'Investments', href: '#' },
  { name: 'Healthcare', href: '#' },
  { name: 'Consumer & Real Estate', href: '#' },
  { name: 'Information Technology', href: '#' },
  { name: 'Food and Beverage', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  return (
    <Disclosure as="nav" className="">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-secondary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img alt="Your Company" src={logoImage} className="h-8 w-auto" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.slice(0, 1).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'text-secondary'
                        : 'text-primary-300 hover:bg-main hover:text-primary',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                {/* Dropdown Menu for Services */}
                <Menu as="div" className="relative">
                  {({ open }) => (
                    <>
                      <Menu.Button className="inline-flex items-center px-3 py-2 text-sm font-medium text-primary rounded-md hover:bg-main hover:text-primary">
                        Services
                        <ChevronDownIcon
                          className={`ml-2 h-5 w-5 transition-transform duration-300 ${
                            open ? 'transform rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </Menu.Button>
                      <Menu.Items
                        className={`absolute left-0 mt-2 w-48 origin-top-right bg-dropdown border border-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-transform duration-300 ${
                          open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                        }`}
                      >
                        {services.map((service) => (
                          <Menu.Item key={service.name}>
                            {({ active }) => (
                              <a
                                href={service.href}
                                className={classNames(
                                  active ? ' text-secondary' : 'text-primary',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                {service.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </>
                  )}
                </Menu>
                {navigation.slice(1).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current
                        ? 'text-secondary'
                        : 'text-primary-300 hover:bg-main hover:text-primary',
                      'rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-md bg-main py-2 px-3 text-base hover:focus:outline-none focus:ring-2 focus:ring-white"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            as="a"
            href="#"
            aria-current="page"
            className="block rounded-md px-3 py-2 text-base font-medium text-primary hover:bg-gray-700 hover:text-white"
          >
            Home
          </DisclosureButton>
          {/* Dropdown Menu for Services in Mobile View */}
          <Disclosure>
            {({ open }) => (
              <>
                <DisclosureButton
                  as="button"
                  className="flex items-center w-full px-3 py-2 text-base font-medium text-primary hover:bg-gray-700 hover:text-white"
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
                  className={`space-y-1 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg transition-transform duration-300 ${
                    open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                  }`}
                >
                  {services.map((service) => (
                    <DisclosureButton
                      key={service.name}
                      as="a"
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {service.name}
                    </DisclosureButton>
                  ))}
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
          {navigation.slice(1).map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current
                  ? 'bg-main text-white'
                  : 'text-primary hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default NavBar;
