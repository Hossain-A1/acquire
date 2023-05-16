import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";

const Navber = () => {

  const {data:session} = useSession()
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
        {
          !session ?(<Button href="/users/login" placeholder="Sign in" color="secondary"/> ): (
            <Button href="/users/profile" placeholder="Profile"/>
          )
        }
        </div>
      </div>
    </div>
  );
};

export default Navber;
