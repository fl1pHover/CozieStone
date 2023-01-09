import { motion } from 'framer-motion';
import { useState } from 'react';

import { imageCards } from '../constant';
import { ColorImage } from '../utils';
import { staggerContainer } from '../utils/motion';

export default function Home() {
  const [isInView, setIsInView] = useState(false);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView={() => {
        // when element in viewport , set IsInView true!
        setIsInView(true);
        return {};
      }}
      animate="show"
      viewport={{ once: false, amount: 0.25 }}
      className="grid grid-cols-3 my-8"
    >
      {imageCards.map((imagecard, index) => (
        <ColorImage index={index} key={index} {...imagecard} />
      ))}
    </motion.div>
  );
}
