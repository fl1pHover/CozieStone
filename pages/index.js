import { motion } from 'framer-motion';
import { useState } from 'react';
import { imageCards } from '../constant';

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
  const [isInView, setIsInView] = useState(false);
  const [content, setContent] = useState('All');
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

      <div className="fixed bottom-[75px] left-[75px] bg-vivid rounded-full uppercase p-10 text-black font-bold">
        <ul className="cursor-pointer">
          <li onClick={() => setContent('All')}>All</li>
          <li onClick={() => setContent('Music')}>Music Video</li>
          <li onClick={() => setContent('Commercial')}>Commercial</li>
          <li onClick={() => setContent('Showreel')}>Showreel</li>
        </ul>
      </div>
    </motion.div>
  );
}
