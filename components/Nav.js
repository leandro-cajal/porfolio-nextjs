// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

import { useContext } from 'react';
import LanguageContext from '../context/LanguageContext';

// nav data
export const navData = [
  {
    english: 'home',
    español: 'inicio',
    path: '/',
    icon: <HiHome />
  },
  {
    english: 'about',
    español: 'perfil',
    path: '/about',
    icon: <HiUser />
  },
  {
    english: 'services',
    español: 'servicios',
    path: '/services',
    icon: <HiRectangleGroup />
  },
  {
    english: 'work',
    español: 'trabajo',
    path: '/work',
    icon: <HiViewColumns />
  },
  {
    english: 'testimonials',
    español: 'testimonios',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    english: 'contact',
    español: 'contacto',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router'

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const { selectedLanguage, changeLanguage } = useContext(LanguageContext);

  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto top-0 w-full xl:right-[2%] z-50 xl:w-16 xl:max-w-md xl:h-screen'>
      {/* inner */}
      <div className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathname && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                <div className='bg-white relative flex text-primary items-center p-[8px]'>
                  <div className='text-[12px] capitalize leading-none font-semibold'>{link[selectedLanguage]}</div>
                  {/* triangle */}
                  <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                </div>
              </div>
              {/* icon */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
