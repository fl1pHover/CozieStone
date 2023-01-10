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
      onClick={() => setExpand(!expand)}
      className={`${styles.flexCenter} sm:hidden flex-col`}
    >
      <UpIcon className="h-[70px] rotate-180 text-[25px]" />
      <AnimatePresence>
        <motion.div
          className={`${expand ? 'flex' : 'hidden disabled:'} ${
            styles.flexCenter
          } flex-col z-[-1] relative`}
          initial={{
            opacity: 0,
          }}
          animate={{
            height: expand ? 270 : 0,
            opacity: expand ? 1 : 0,
            display: expand ? 'flex' : 'disabled',
            transition: {
              delay: 0,
              duration: 0.7,
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
                  ? 'active text-vivid'
                  : `${styles.hoverRed} text-dimGrey`
              } px-[15px] uppercase py-3`}
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
