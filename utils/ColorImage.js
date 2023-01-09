import { motion } from 'framer-motion';
import React from 'react';
import styles from '../styles';
import { fadeIn } from './motion';

const ColorImage = ({ image, title, desc, index }) => {
  return (
    <motion.a
      href="/product"
      variants={fadeIn('up', ' ', index * 0.25, 0.5)}
      className="aspect-square relative group overflow-hidden"
    >
      <img
        src={image}
        alt="image 1"
        className="w-full aspect absolute group-hover:scale-[1.1] duration-200"
      />
      <div
        className={`${styles.absoluteCenter} ${styles.flexCenter} w-full h-full flex-col z-10 `}
      >
        <h1 className="opacity-0 group-hover:opacity-100 duration-200">
          {title}
        </h1>
        <p className="opacity-0 group-hover:opacity-100 duration-200">{desc}</p>
      </div>
      <div className="black__overlay group-hover:bg-primary-black opacity-50 absolute w-full h-full duration-200" />
    </motion.a>
  );
};

export default ColorImage;
