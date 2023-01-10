import { AnimateSharedLayout, motion } from 'framer-motion';
import Layout from '../layout';
import '../styles/globals.scss';

// const variants = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

function MyApp({ Component, pageProps }) {
  return (
    // <AnimatePresence exitBeforeEnter>
    <AnimateSharedLayout>
      <motion.div
      // variants={variants}
      // initial="hidden"
      // animate="enter"
      // exit="exit"
      // transition={{ type: 'linear' }}
      >
        <Layout className="bg-black">
          <Component {...pageProps} />
        </Layout>
      </motion.div>{' '}
    </AnimateSharedLayout>
    // </AnimatePresence>
  );
}

export default MyApp;
