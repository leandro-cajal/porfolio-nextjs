import '../styles/globals.css';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// 
import { LanguageProvider } from '../context/LanguageContext';


function MyApp({ Component, pageProps }) {

  const router = useRouter();

  return (
    <LanguageProvider>
      <Layout >
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition />
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </LanguageProvider>
  )
}

export default MyApp;
