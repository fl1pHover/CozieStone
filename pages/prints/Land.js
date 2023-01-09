import { motion } from 'framer-motion';
import React from 'react';
import { fadeIn } from '../../utils/motion';

const printImages = [
  { image: '1.png', id: 1 },
  { image: '2.png', id: 2 },
  { image: '3.png', id: 3 },
  { image: '4.png', id: 4 },
];

const Land = () => {
  return (
    <>
      {printImages.map((printImage, index) => (
        <motion.a
          href="/"
          variants={fadeIn('up', ' ', index * 0.25, 0.5)}
          key={index}
        >
          <img
            src={'/images/landscape/' + printImage.id + '.png'}
            {...printImage}
            alt="asd"
            className="aspect-video w-full h-full"
          />
        </motion.a>
      ))}
    </>
  );
};

export default Land;
