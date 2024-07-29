// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Where in the world?',
          path: '/thumb1.png',
          link: 'https://whereintheworlds.netlify.app/',
        },
        {
          title: 'Electro-shop',
          path: '/thumb2.png',
          link: 'https://my-electro-shop.netlify.app/',
        },
        {
          title: 'El descanso Hotel',
          path: '/thumb3.png',
          link: 'https://eldescansohotel.netlify.app/',
        },
        {
          title: 'Sneakers',
          path: '/thumb4.png',
          link: 'https://sneakers-e-shop.netlify.app/',
        },
      ],
    },
    {
      images: [
        {
          title: 'Sneakers',
          path: '/thumb4.png',
          link: 'https://sneakers-e-shop.netlify.app/',
        },
        {
          title: 'Where in the world?',
          path: '/thumb1.png',
          link: 'https://whereintheworlds.netlify.app/',
        },
        {
          title: 'Electro-shop',
          path: '/thumb2.png',
          link: 'https://my-electro-shop.netlify.app/',
        },
        {
          title: 'El descanso Hotel',
          path: '/thumb3.png',
          link: 'https://eldescansohotel.netlify.app/',
        },
      ],
    },
  ],
};


// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import image from next
import Image from 'next/image';


// import required modules
import { Pagination } from 'swiper';

// import Link from next
import Link from 'next/link';

// icons
import { BsArrowRight } from 'react-icons/bs';


const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div className='relative rounded-lg overflow-hidden flex item-center justify-center group' key={index}>
                    <Link href={image.link} target='_blank' className='flex items-center justify-center relative overflow-hidden group'>
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                      />
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          {/* title part 1 */}
                          <div className='delay-100'>LIVE</div>
                          {/* title part 2 */}
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>PROJECT</div>
                          {/* icon */}
                          <div><BsArrowRight /></div>
                        </div>
                      </div>
                    </Link>
                  </div>
            )
              })}
          </div>
          </SwiperSlide>
  )
})}
    </Swiper >
  );
};

export default WorkSlider;
