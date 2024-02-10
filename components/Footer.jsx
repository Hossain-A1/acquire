import Link from "next/link";
import {AiFillLinkedin,AiFillTwitterSquare,AiFillInstagram} from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <div className="lg:flex gap-5 justify-between bg-black  text-white p-10 border-b-2 border-gray-500/30">
        <div className="w-[40vw] flex flex-col gap-5 justify-between">
          <h2 className="text-2xl capitalize font-semibold">Acquire</h2>
          <p>
            Acquire is a course selling website which offers
            thousands of online courses in various categories such as business,
            technology, health, tech, fitness, and more. Acquire provides an
            easy way for students to learn new skills and for instructors to
            share their knowledge with the world.
          </p>
          <div className="flex gap-5">
          <Link href="https://www.linkedin.com/in/hossain-ahmed-163b11236/" className="text-3xl">
            <AiFillLinkedin />
          </Link>
          <Link href="/linkedin" className="text-3xl"><AiFillInstagram/></Link>
          <Link href="/linkedin" className="text-3xl"><AiFillTwitterSquare/></Link>
          </div>
        </div>

        <div className="flex flex-col  gap-5 ">
          <h2 className="text-2xl capitalize font-semibold">Quicklinks</h2>
          <div
            data-aos="fade-in"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            <Link
              href="/"
              className="hover:text-gray-400 transition-colors  duration-300 "
            >
              Home
            </Link>
          </div>

          <div
            data-aos="fade-in"
            data-aos-delay="300"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
          >
            <Link
              href="courses"
              className="hover:text-gray-400  transition-colors  duration-300"
            >
              Courses
            </Link>
          </div>

          <div
            data-aos="fade-in"
            data-aos-delay="500"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
          >
            <Link
              href="orders"
              className="hover:text-gray-400  transition-colors duration-300"
            >
              Orders
            </Link>
          </div>

          <div
            data-aos="fade-in"
            data-aos-delay="700"
            data-aos-duration="1100"
            data-aos-easing="ease-in-out"
          >
            <Link
              href="about"
              className="hover:text-gray-400 transition-colors  duration-300 "
            >
              About
            </Link>
          </div>

        
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-2xl capitalize font-semibold">Support</h2>
          <div
            data-aos="fade-in"
            data-aos-delay="900"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <Link
              href="contact"
              className="hover:text-gray-400 transition-colors   duration-300"
            >
              Contact us
            </Link>
          </div>
          <div
            data-aos="fade-in"
            data-aos-delay="900"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <Link
              href="contact"
              className="hover:text-gray-400 transition-colors   duration-300"
            >
              FAQS
            </Link>
          </div>
          <div
            data-aos="fade-in"
            data-aos-delay="900"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <Link
              href="contact"
              className="hover:text-gray-400 transition-colors   duration-300"
            >
              Help
            </Link>
          </div>
          <div
            data-aos="fade-in"
            data-aos-delay="900"
            data-aos-duration="1300"
            data-aos-easing="ease-in-out"
          >
            <Link
              href="contact"
              className="hover:text-gray-400 transition-colors   duration-300"
            >
              privacy & policy
            </Link>
          </div>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl capitalize font-semibold">Contact</h2>
          <div className="space-y-3">
            <p className="text-gray-500 text-lg font-semibold">Email</p>
            <span>jenifa@info.net</span>
            <p className="text-gray-500 text-lg font-semibold">Phone</p>
            <span>(9660501747602)</span>
            <p className="text-gray-500 text-lg font-semibold">Address</p>
            <span>Dammam Saudi Arabia.</span>
          </div>
        </div>
      </div>

      <p className="py-10 bg-black text-white/70 text-center">
        &copy; {new Date().getFullYear()} Ecquire. All right reserved.
      </p>
    </div>
  );
};

export default Footer;
