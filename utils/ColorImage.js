import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from '../styles';
import { fadeIn } from './motion';
// const boxVariant = {
//   visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
//   hidden: { opacity: 0, scale: 0 },
// };

const ColorImage = ({ image, title, desc, index }) => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      control.start('show');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.a
      ref={ref}
      href="/product"
      variants={fadeIn('up', 'spring', 0, 0.8)}
      // variants={boxVariant}
      initial="hidden"
      animate={control}
      viewport={{ once: true }}
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
