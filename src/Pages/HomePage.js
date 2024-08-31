import React from 'react';
import Header from '../Components/Header/Header'
import OurCompany from '../Components/OurCompany/OurCompany';
import Services from '../Components/Services/Services';
import Accordion from '../Components/Accordion/Accordion';
import OurBlog from '../Components/OurBlog/OurBlog';
import Client from '../Components/Client/Client';

const HomePage = () => {
  return (
    <>
      <Header />
      <OurCompany />
      <Services />
      <Accordion />
      <OurBlog />
      <Client/>
    </>
  );
}

export default HomePage