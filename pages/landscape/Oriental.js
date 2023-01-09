import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { fadeIn } from '../../utils/motion';

import { printImages } from '../../constant';

const Oriental = () => {
  return (
    <>
      {printImages.map((printImage, index) => (
        <Link href={'landscape/' + printImage.id} key={index}>
          <motion.div
            variants={fadeIn('up', ' ', index * 0.25, 0.5)}
            layoutId={printImage}
          >
            <img
              src={'/images/oriental/' + printImage.image}
              {...printImage}
              alt="image"
              className="aspect-[3/4] w-full h-full"
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

export default Oriental;
