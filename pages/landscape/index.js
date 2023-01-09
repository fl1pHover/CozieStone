import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styles from '../../styles';
import { staggerContainer } from '../../utils/motion';
import Land from './Land';
import Oriental from './Oriental';

const Landscape = () => {
  const [change, setChange] = useState(true);

  return (
    <section className={`${styles.xPaddings}`}>
      <div className={`${styles.flexBetween} text-white text-[20px]`}>
        <h2
          className={`${styles.hoverRed} ${styles.subTitle} cursor-pointer`}
          onClick={() => setChange(true)}
        >
          Oriental
        </h2>
        <h2
          className={`${styles.hoverRed} ${styles.subTitle} cursor-pointer`}
          onClick={() => setChange(false)}
        >
          Landscape
        </h2>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className={`${
          change
            ? 'grid grid-cols-1 xs:grid-cols-2 gap-10 lg:gap-20'
            : 'grid grid-cols-1 gap-10 lg:gap-20'
        } mt-10`}
      >
        {change ? <Oriental /> : <Land />}
      </motion.div>
    </section>
  );
};

export default Landscape;
