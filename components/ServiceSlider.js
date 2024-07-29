// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data in English
const serviceDataEnglish = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Creating unique brand identities.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Crafting modern, user-friendly designs.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Building responsive and dynamic websites.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Writing clear, engaging content.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimizing sites for search engines.',
  },
];

// data in Spanish
const serviceDataSpanish = [
  {
    icon: <RxCrop />,
    title: 'Marca',
    description: 'Creando identidades de marca únicas.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Diseño',
    description: 'Creando diseños modernos y fáciles de usar.',
  },
  {
    icon: <RxDesktop />,
    title: 'Desarrollo',
    description: 'Construyendo sitios web responsivos y dinámicos.',
  },
  {
    icon: <RxReader />,
    title: 'Redacción',
    description: 'Escribiendo contenido claro y atractivo.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Optimizando sitios para motores de búsqueda.',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// import language context
import { useContext } from 'react';
import LanguageContext from "../context/LanguageContext";

const ServiceSlider = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const serviceData = selectedLanguage === 'english' ? serviceDataEnglish : serviceDataSpanish;

  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <section className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* title & desc */}
                <article className="mb8 max-h-[84px]">
                  <h6 className="mb-2 text-lg">{item.title}</h6>
                  <p className="max-w-[350px] leading-normal">{item.description}</p>
                </article>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all ml-auto duration-300" />
                </div>
              </section>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
