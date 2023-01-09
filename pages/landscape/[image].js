import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles';

const ImageContent = () => {
  const {
    query: { printImage },
  } = useRouter();

  console.log(printImage);
  return (
    <div className={`${styles.xPaddings}`}>
      <h1>{printImage}</h1>
      <motion.div layoutId={printImage}>
        <img
          transition={{ duration: 1.5 }}
          src={'/images/landscape/' + printImage + '.png'}
          alt="Image Content"
          className="image-full"
        />
      </motion.div>
    </div>
  );
};

export default ImageContent;
