import '../styles/globals.css';

//components
import Layout from '../components/Layout';
import Transition from '../components/Transition';

// router
import { useRouter } from 'next/router';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// language context
import { LanguageProvider } from '../context/LanguageContext';

// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
