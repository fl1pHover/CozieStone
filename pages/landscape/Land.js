import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { fadeIn } from '../../utils/motion';

import { printImages } from '../../constant';

const Land = () => {
  return (
    <>
      {printImages.map((printImage, index) => (
        <Link href={'landscape/' + printImage.id} key={index} {...printImage}>
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
