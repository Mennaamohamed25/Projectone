import React from 'react';
import imgOne from '../../../images/h1.png';
import imgTwo from '../../../images/h2.png';
import imgThree from '../../../images/h3.png';
import imgFour from '../../../images/cf.png';
import imgFive from '../../../images/cp.png';
import imgSix from '../../../images/cv.png';
import imgSeven from '../../../images/ce.png';

const data = [
  {
    id: 1,
    text: 'Project  1',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
    img: imgFour,
  },
  {
    id: 2,
    text: 'Project 2',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
    img: imgFive,
  },
  {
    id: 3,
    text: 'Project 3',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
    img: imgSix,
  },
  {
    id: 4,
    text: 'Project 4',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem',
    img: imgSeven,
  },
];

const Healthcare = () => {
  return (
    <div className="px-4 py-4 md:px-6 md:py-6">
      <div className="relative flex flex-col gap-6 md:flex-row md:gap-8">
        {/* First Column: Text + Image */}
        <div className="flex flex-col flex-1 space-y-4 mt-8 md:mt-8">
          <div>
            <h2 className="text-4xl text-secondary font-semibold mb-4 leading-hero">
              Healthcare
            </h2>
            <p className="text-textspan mb-4">
              Add your descriptive text here. This could be an introduction or
              explanation about the image.
            </p>
            <button className="mb-4 rounded-lg px-6 py-4 gap-2 bg-secondary text-base">
              Contact Us
            </button>
          </div>
          <img
            src={imgOne}
            alt="Description 1"
            className="w-full h-48 object-cover md:h-auto"
          />
        </div>

        {/* Second Column: Image */}
        <div className="flex-1 flex items-center">
          <img
            src={imgTwo}
            alt="Description 2"
            className="w-full h-48 object-cover md:h-auto"
          />
        </div>

        {/* Third Column: Image */}
        <div className="flex-1 flex flex-col items-end">
          <img
            src={imgThree}
            alt="Description 3"
            className="w-full h-48 object-cover md:h-auto"
          />
          <p className="mt-4 mb-10 text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <p className="mt-4 mb-10 text-textspan">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries
      </p>
      <div>
        <p className="font-extrabold text-2xl leading-9">Projects</p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 mt-4 mb-4">
          {data.map(({ id, text, desc, img }) => (
            <div key={id} className="flex flex-col  flex-1 ">
              <div className="bg-dropdown p-6 rounded-t-lg">
                {' '}
                <p className=" mb-2 ">{text}</p>
                <p className="text-textspan text-sm">{desc}</p>
              </div>

              <img
                src={img}
                alt={`Description ${id}`}
                className="w-full h-auto object-cover rounded-b-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
