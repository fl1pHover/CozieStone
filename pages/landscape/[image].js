import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../../styles';

const ImageContent = () => {
  const {
    query: { index },
  } = useRouter();

  console.log(index);
  return (
    <div className={`${styles.xPaddings}`}>
      <h1>{index}</h1>
      <motion.div layoutId={index}>
        <img
          // transition={{ duration: 1.5 }}
          src={'/' + index + '.png'}
          alt="Image Content"
          className="image-full"
          z
        />
      </motion.div>
    </div>
  );
};

export default ImageContent;
