import { useEffect, useState } from 'react';

import { UpIcon } from '../components/icons';

const ScrollTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
      // else !setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const top = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
      onClick={top}
      className={`${
        !scrolled ? 'opacity-0' : 'opacity-1'
      } group transition-all duration-500 fixed bottom-[20px] right-[20px] bg-primary-black hover:bg-hover-black w-[50px] h-[50px] grid place-items-center rounded-[5px] cursor-pointer`}
    >
      <button
        // className=(
        //   'bg-blue-600 rounded-full md:py-3 py-2 md:px-4 px-3',
        //   'transition-all duration-500 ease-in-out',
        //   !scrolled ? 'opacity-0' : 'opacity-100',
        //   !scrolled ? 'translate-y-[100px]' : 'translate-y-[0px]'
        // )
        className="duration-500 text-vivid group-hover:text-grey"
      >
        <UpIcon />
      </button>
    </div>
  );
};

export default ScrollTop;
