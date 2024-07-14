//fonts
import { Sora } from '@next/font/google'
// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

// components
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

// next/head
import Head from 'next/head';



const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <Head>
      {/* Metadatos en inglés */}
      <title>Leandro Cajal Portfolio - Front-End Developer</title>
      <meta name="description" content="Front-End Developer in Argentina, specializing in technologies such as React, Next.js, and Tailwind CSS. Committed to delivering intuitive and engaging digital experiences." />
      <meta name="keywords" content="Front-End Developer, React, Next.js, Tailwind CSS, HTML, CSS, SEO, Argentina" />
      <meta name="author" content="Leandro Cajal" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://leandro-cajal.netlify.app/" />
      <link rel="icon" href="/favicon.ico" />
      {/* Open Graph */}
      <meta property="og:title" content="Leandro Cajal Portfolio - Front-End Developer" />
      <meta property="og:description" content="Front-End Developer in Argentina, specializing in technologies such as React, Next.js, and Tailwind CSS. Committed to delivering intuitive and engaging digital experiences." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://leandro-cajal.netlify.app/" />
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Leandro Cajal Portfolio - Front-End Developer" />
      <meta name="twitter:description" content="Front-End Developer in Argentina, specializing in technologies such as React, Next.js, and Tailwind CSS. Committed to delivering intuitive and engaging digital experiences." />

      {/* Metadatos en español */}
      <link rel="alternate" hrefLang="es" href="https://leandro-cajal.netlify.app/" />
      <title>Leandro Cajal Portfolio - Front-End Developer</title>
      <meta name="description" content="Desarrollador Front-End en Argentina, especializado en tecnologías como React, Next.js, y Tailwind CSS. Comprometido con ofrecer experiencias digitales intuitivas y atractivas." />
      <meta name="keywords" content="Desarrollador Front-End, React, Next.js, Tailwind CSS, HTML, CSS, SEO, Argentina" />
      <meta name="author" content="Leandro Cajal" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://leandro-cajal.netlify.app/" />
      {/* Open Graph */}
      <meta property="og:title" content="Leandro Cajal Portfolio - Desarrollador Front-End" />
      <meta property="og:description" content="Desarrollador Front-End en Argentina, especializado en tecnologías como React, Next.js, y Tailwind CSS. Comprometido con ofrecer experiencias digitales intuitivas y atractivas." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://leandro-cajal.netlify.app/" />
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Leandro Cajal Portfolio - Desarrollador Front-End" />
      <meta name="twitter:description" content="Desarrollador Front-End en Argentina, especializado en tecnologías como React, Next.js, y Tailwind CSS. Comprometido con ofrecer experiencias digitales intuitivas y atractivas." />
    </Head>

      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>);
};

export default Layout;
