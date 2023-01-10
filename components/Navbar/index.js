'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { navItems } from '../../constant';
import styles from '../../styles';
import { fadeIn, staggerContainer } from '../../utils/motion';

import { usePathname } from 'next/navigation';

const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
      staggerChildren: 0.2,
    },
  },
};

const Navbar = () => {
  // const { asPath } = useRouter();
  const pathname = usePathname();

  return (
    <nav
      className={`${styles.flexCenter} relative flex-col uppercase sm:mt-3 sm:0 z-10`}
    >
      <h1
        animate={{ x: 100 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className={`${styles.heroHeading} p-[30px] sm:p-0 `}
      >
        <Link href="/" className={`${styles.hoverRed}`}>
          CozieStone
        </Link>
      </h1>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.flexCenter} sm:flex hidden mt-3`}
      >
        {navItems?.map((navItem, index) => (
          <Link
            key={index}
            variants={fadeIn('left', 'Tween', index * 0.2, 0.5)}
            // animate={{ x: 100 }}
            // transition={{ type: 'spring', stiffness: 100 }}
            href={navItem.href}
            className={`${
              pathname === navItem.href
                ? 'active text-vivid'
                : `${styles.hoverRed} text-dimGrey`
            } px-[15px] w-full text-center`}
          >
            {navItem.item}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
