import Link from "next/link";
import Button from "./Button";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { getAnimation, shutterDown, shutterUp } from "@/utils/motion";

const Navber = () => {
  const { data: session } = useSession();
  return (
    <div className="h-20  bg-slate-200 flex items-center">
      <div className="wrapper flex  justify-between items-center">
        <motion.div
          variants={shutterDown()}
          initial="from"
          animate="to"
          transition={getAnimation()}
        >
          <Link href="/" className="text-2xl text-orange-800 font-semibold">
            Acquire
          </Link>
        </motion.div>

        <div className="flex   justify-center gap-5">
          <motion.div
            variants={shutterUp()}
            initial="from"
            whileInView="to"
            translate={getAnimation()}
          >
            <Link href="/" className="hover:text-orange-800 transition-colors">
              Home
            </Link>
          </motion.div>

          <motion.div
            variants={shutterDown()}
            initial="from"
            whileInView="to"
            translate={getAnimation()}
          >
            <Link
              href="courses"
              className="hover:text-orange-800  transition-colors"
            >
              Courses
            </Link>
          </motion.div>

          <motion.div
            variants={shutterUp()}
            initial="from"
            whileInView="to"
            translate={getAnimation()}
          >
            {session && (
              <Link
                href="orders"
                className="hover:text-orange-800  transition-colors"
              >
                Orders
              </Link>
            )}
          </motion.div>

          <motion.div
            variants={shutterDown()}
            initial="from"
            whileInView="to"
            translate={getAnimation()}
          >
            <Link
              href="about"
              className="hover:text-orange-800 transition-colors"
            >
              About
            </Link>
          </motion.div>

          <motion.div
            variants={shutterUp()}
            initial="from"
            whileInView="to"
            translate={getAnimation()}
          >
            <Link
              href="contact"
              className="hover:text-orange-800 transition-colors"
            >
              Contact
            </Link>
          </motion.div>
        </div>
        <motion.div
          variants={shutterDown()}
          initial="from"
          animate="to"
          translate={getAnimation()}
        >
          {!session ? (
            <Button
              href="/users/login"
              placeholder="Sign in"
              color="secondary"
            />
          ) : (
            <Button href="/users/profile" placeholder="Profile" />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Navber;
