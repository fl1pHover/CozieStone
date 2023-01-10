import { motion } from 'framer-motion';
import { useState } from 'react';
import { imageCards } from '../constant';
import styles from '../styles';
import { ColorImage } from '../utils';
import { staggerContainer } from '../utils/motion';

const Options = () => {
  const [content, setContent] = useState('All');

  return (
    <div className="fixed bottom-[75px] left-[75px] bg-vivid rounded-full uppercase p-10 text-black font-bold">
      <ul className="cursor-pointer">
        <li onClick={() => setContent('All')}>All</li>
        <li onClick={() => setContent('Music')}>Music Video</li>
        <li onClick={() => setContent('Commercial')}>Commercial</li>
        <li onClick={() => setContent('Showreel')}>Showreel</li>
      </ul>
    </div>
  );
};

export default function Home() {
  const [content, setContent] = useState('All');

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="grid grid-cols-3 sm:my-8 my-0"
    >
      {content === 'All' &&
        imageCards.map((imagecard, index) => (
          <ColorImage index={index} key={index} {...imagecard} />
        ))}

      {content === 'Music' &&
        imageCards.map((imagecard, index) => (
          <ColorImage index={index} key={index} {...imagecard} />
        ))}

      {content === 'Commercial' &&
        imageCards.map((imagecard, index) => (
          <ColorImage index={index} key={index} {...imagecard} />
        ))}

      {content === 'Showreel' &&
        imageCards.map((imagecard, index) => (
          <ColorImage index={index} key={index} {...imagecard} />
        ))}

      <div className={`${styles.options}`}>
        <ul className="cursor-pointer leading-[14px] sm:leading-7">
          <li onClick={() => setContent('All')}>All</li>
          <li onClick={() => setContent('Music')}>Music Video</li>
          <li onClick={() => setContent('Commercial')}>Commercial</li>
          <li onClick={() => setContent('Showreel')}>Showreel</li>
        </ul>
        {/* <div className="bg-vivid sm:hidden p-[100px] rounded-full absolute top-[25%] left-[-100%] z-[-1]"></div> */}
      </div>
    </motion.div>
  );
}
