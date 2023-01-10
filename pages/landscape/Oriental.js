import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { printImages } from '../../constant';
import { fadeIn } from '../../utils/motion';

const Oriental = () => {
  const [layoutId, setLayoutId] = useState(null);

  return (
    <>
      {printImages.map((image, index) => (
        <Link href={'landscape/' + image} key={image} {...image}>
          <motion.div
            variants={fadeIn('up', ' ', index * 0.25, 0.5)}
            layoutId={image.id}
          >
            <img
              src={'/images/oriental/' + image.id + '.png'}
              alt="image"
              className="aspect-[3/4] w-full h-full"
            />
            <h2 className="uppercase mt-3">
              {image.header}, {image.date}
            </h2>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default Oriental;
