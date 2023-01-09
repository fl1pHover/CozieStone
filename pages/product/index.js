import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { videoImages } from '../../constant';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

const Product = () => {
  return (
    <motion.section
      className={`${styles.xPaddings} md:mt-[50px] mt-[30px]`}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <video controls width="100%">
        <source src="/media/cc0-videos/flower.webm" type="video/webm" />
        <source src="/media/cc0-videos/flower.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col sm:mb-[50px] md:mb-[80px] mb-[50px] text-[12px] xs:text-[16px] md:text-[18px]">
        <h2 className={`${styles.mainHeading}`}>
          Playtime collaboration Video Part 01
        </h2>
        <p>
          Written and Narration by{' '}
          <Link href="/" className={`${styles.hoverRed}`}>
            @magnolianmusic
          </Link>
        </p>
        <p>
          DOP{' '}
          <Link href="" className={`${styles.hoverRed}`}>
            @kolyakito
          </Link>
        </p>
        <p>
          Edit & Color grade{' '}
          <Link href="/" className={`${styles.hoverRed}`}>
            @Coziestone
          </Link>
        </p>
        <p>
          Set Designer{' '}
          <Link href="/" className={`${styles.hoverRed}`}>
            @van_duulga
          </Link>
        </p>
        <p>
          Gaffer @ari_gn11{' '}
          <Link href="/" className={`${styles.hoverRed}`}>
            @dulgnmrn
          </Link>{' '}
          <Link href="/" className={`${styles.hoverRed}`}>
            @pujefyd
          </Link>
        </p>
      </div>
      <div
        className="flex flex-col md:gap-[150px] sm:gap-[100px] gap-[50px]"
        variants={fadeIn()}
      >
        {videoImages.map((videoImage, index) => (
          <motion.img
            {...videoImage}
            variants={fadeIn('up', 'spring', index * 0.25)}
            src={videoImage.image}
            alt="image 1"
            className="aspect-wide"
            key={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Product;
