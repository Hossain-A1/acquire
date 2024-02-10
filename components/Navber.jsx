import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { CgMenu, CgClose } from "react-icons/cg";

const Navber = () => {
  const { data: session } = useSession();
  const [icon, setIcon] = useState(false);

  const toggleNav = (e) => {};

  return (
    <div className=' navber w-full h-20  px-5 bg-black flex items-center justify-between'>
      <div
        data-aos='fade-in'
        data-aos-delay='300'
        data-aos-easing='ease-in-out'
      >
        <Link href='/' className='text-2xl text-white font-semibold'>
          Acquire_
        </Link>
      </div>

      <div
        className={`${
          !icon
            ? " max-lg:hidden "
            : "max-lg:absolute max-lg:bg-black z-[999] max-lg:left-0 max-lg:bottom-0 max-lg:top-0 max-lg:right-0 max-lg:h-full visible block eq "
        }`}
      >
        <div className='max-lg:relative max-lg:h-full max-lg:w-full'>
          <div className='lg:flex lg:justify-between xl:gap-10 max-lg:flex-col  gap-5  items-center max-lg:absolute justify-center text-center max-lg:h-full  max-lg:top-1/2  max-lg:-translate-y-40 max-lg:left-1/2 max-lg:-translate-x-1/2 uppercase max-lg:space-y-10 '>
            <div
              data-aos='fade-in'
              data-aos-delay='100'
              data-aos-duration='500'
              data-aos-easing='ease-in-out'
            >
              <Link
                onClick={() => setIcon(false)}
                href='/'
                className='  text-white  transition-colors  duration-300 '
              >
                Home
              </Link>
            </div>

            <div
              data-aos='fade-in'
              data-aos-delay='300'
              data-aos-duration='700'
              data-aos-easing='ease-in-out'
            >
              <Link
                onClick={() => setIcon(false)}
                href='courses'
                className=' text-white   transition-colors  duration-300'
              >
                Courses
              </Link>
            </div>

            <div
              data-aos='fade-in'
              data-aos-delay='500'
              data-aos-duration='900'
              data-aos-easing='ease-in-out'
            >
              {session && (
                <Link
                  onClick={() => setIcon(false)}
                  href='orders'
                  className=' text-white    transition-colors duration-300'
                >
                  Orders
                </Link>
              )}
            </div>

            <div
              data-aos='fade-in'
              data-aos-delay='700'
              data-aos-duration='1100'
              data-aos-easing='ease-in-out'
            >
              <Link
                onClick={() => setIcon(false)}
                href='about'
                className=' text-white transition-colors  duration-300 '
              >
                About
              </Link>
            </div>
            <div
              data-aos='fade-in'
              data-aos-delay='700'
              data-aos-duration='1100'
              data-aos-easing='ease-in-out'
            >
              <Link
                onClick={() => setIcon(false)}
                href='faqs'
                className=' text-white  transition-colors  duration-300 '
              >
                FAQS
              </Link>
            </div>

            <div
              data-aos='fade-in'
              data-aos-delay='900'
              data-aos-duration='1300'
              data-aos-easing='ease-in-out'
            >
              <Link
                onClick={() => setIcon(false)}
                href='contact'
                className=' transition-colors text-white   duration-300'
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos='fade-in'
        data-aos-delay='600'
        data-aos-duration='1000'
        data-aos-easing='ease-in-out'
        className='flex items-center gap-5'
      >
        {!session ? (
          <Button href='/users/login' placeholder='Sign in' color='secondary' />
        ) : (
          <Button href='/users/profile' placeholder='Profile' color='lazy' />
        )}

        <MdMenu
          onClick={toggleNav}
          className='text-3xl cursor-pointer md:hidden'
        />

        <div
          className={` ${
            !icon
              ? "absolute  right-5 top-6 px-1 py-1 cursor-pointer  rounded-full lg:hidden flex items-center justify-center"
              : "active"
          }`}
        >
          <div className='mobile-navber-btn relative'>
            <CgMenu
              name='menu-outline'
              className='mobile-navber-icon text-white  text-2xl'
              onClick={() => setIcon(true)}
            />
            <CgClose
              name='close-outline'
              className='mobile-navber-icon  close-outline'
              onClick={() => setIcon(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
