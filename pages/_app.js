import { AnimatePresence, motion } from 'framer-motion';
import Layout from '../layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Layout className="bg-black">
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
