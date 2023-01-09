import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { fadeIn } from '../../utils/motion';

const printImages = [
  { image: '1.png', id: 1, header: 'Gazriin ner', date: 2022 },
  { image: '2.png', id: 2, header: 'Gazriin ner', date: 2022 },
  { image: '3.png', id: 3, header: 'Gazriin ner', date: 2022 },
  { image: '4.png', id: 4, header: 'Gazriin ner', date: 2022 },
];

const Land = () => {
  return (
    <>
      {printImages.map((printImage, index) => (
        <Link href="/" key={index} {...printImage}>
          <motion.div variants={fadeIn('up', ' ', index * 0.25, 0.5)}>
            <img
              src={'/images/oriental/' + printImage.image}
              alt="image "
              className="aspect-video w-full h-full"
            />
            <h2 className="uppercase mt-3">
              {printImage.header}, {printImage.date}
            </h2>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default Land;
