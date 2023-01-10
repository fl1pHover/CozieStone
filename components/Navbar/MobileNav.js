import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { navItems } from '../../constant';
import styles from '../../styles';
import { UpIcon } from '../icons';

const MobileNav = () => {
  const [expand, setExpand] = useState(false);
  const { asPath } = useRouter();

  return (
    <div
      className={`${styles.flexCenter} sm:hidden flex-col  relative`}
      onClick={() => setExpand(!expand)}
    >
      <button
        className={`${styles.flexCenter} relative h-[70px] w-full bg-hover-black rotate-180 text-[25px] flex justify-center z-5`}
      >
        <UpIcon />
      </button>
      <AnimatePresence>
        <motion.div
          className={`${expand ? 'flex' : 'hidden'} ${
            styles.flexCenter
          } flex-col w-full overflow-hidden`}
          initial={{
            opacity: 0,
          }}
          animate={{
            height: expand ? 250 : 0,
            opacity: expand ? 1 : 0,
            display: expand ? 'flex' : 'disabled',
            zIndex: expand ? '1' : '-1',
            transition: {
              delay: 0,
              duration: 0.5,
            },
          }}
        >
          {navItems?.map((navItem, index) => (
            <Link
              key={index}
              // animate={{ x: 100 }}
              // transition={{ type: 'spring', stiffness: 100 }}
              href={navItem.href}
              className={`${
                asPath === navItem.href
                  ? 'text-vivid'
                  : `${styles.hoverRed} text-dimGrey`
              } px-[15px] w-full text-center uppercase py-3`}
            >
              {navItem.item}
            </Link>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
