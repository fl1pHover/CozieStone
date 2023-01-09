import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { navItems } from '../constant';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

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
  const { asPath } = useRouter();

  return (
    <nav className={`${styles.flexCenter} flex-col uppercase my-3`}>
      <h1
        animate={{ x: 100 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className={`${styles.heroHeading}`}
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
        className={`${styles.flexCenter} mt-3`}
      >
        {navItems?.map((navItem, index) => (
          <Link
            key={index}
            variants={fadeIn('left', 'Tween', index * 0.2)}
            // animate={{ x: 100 }}
            // transition={{ type: 'spring', stiffness: 100 }}
            href={navItem.href}
            className={`${
              asPath === navItem.href
                ? 'active text-vivid'
                : `${styles.hoverRed} text-dimGrey`
            } px-[15px]`}
          >
            {navItem.item}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

export default Navbar;
