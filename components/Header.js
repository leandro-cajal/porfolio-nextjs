// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from '../components/Socials';


const Header = () => {
  return (
  <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
        {/* logo */}
        <Link href={'/'}>
          {/* <Image 
            src={'/logo.svg'}
            width={220}
            height={48}
            alt=""
            priority={true}
           /> */}
           <h1 className="flex gap-2">
            <p className="font-bold font-poppins text-3xl text-white">Leandro</p>
            <p className="text-3xl font-bold font-poppins">Cajal<span className="text-accent mt-auto font-bold mr-auto">.</span></p>
          </h1>
        </Link>
        {/* socials */}
        <Socials />
      </div>
    </div>
  </header>);
};

export default Header;
