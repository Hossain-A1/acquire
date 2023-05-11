import Link from "next/link";
import Button from "./Button";

const Navber = () => {
  return (
    <div className="h-20 bg-slate-200 flex items-center">
      <div className="wrapper flex justify-between items-center">
        <Link href="/" className="text-2xl text-orange-800 font-semibold">
          Acquire
        </Link>

        <div className="flex justify-center gap-5">
          <Link href="/" className="hover:text-orange-800 transition-colors">
            Home
          </Link>
          <Link
            href="courses"
            className="hover:text-orange-800  transition-colors"
          >
            Courses
          </Link>
          <Link
            href="about"
            className="hover:text-orange-800 transition-colors"
          >
            About
          </Link>
          <Link
            href="contact"
            className="hover:text-orange-800 transition-colors"
          >
            Contact
          </Link>
        </div>
        <div>
        <Button href="/login" placeholder="Sign in" color="secondary"/>
        </div>
      </div>
    </div>
  );
};

export default Navber;
