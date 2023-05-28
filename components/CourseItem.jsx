import { currencyConverter } from "@/utils/currencyConverter";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import Button from "./Button";
import { motion } from "framer-motion";
import { getAnimation, shutterCard } from "@/utils/motion";

const CourseItem = ({ course }) => {
  return (
    <motion.div
      className="w-full lg:w-[20rem] shadow-md hover:shadow-lg duration-300 rounded overflow-hidden"
      variants={shutterCard()}
      initial="from"
      whileInView="to"
      translate={getAnimation(0.5, 2.5, "easeInOut")}
    >
      <div className="w-full h-[25rem] lg:h-[20rem] overflow-hidden">
        <Image
          src={course.cover}
          alt={course.title}
          width={640}
          height={360}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-2xl font-semibold capitalize">{course.title}</h3>
        <p className="flex justify-between">
          <span className="text-gray-500">
            by{" "}
            <span className="font-semibold capitalize text-rose-800 text-sm">
              {course.instructor}
            </span>
          </span>

          <span className="text-gray-500">
            Duration:
            <span className="font-semibold capitalize text-rose-800 text-sm">
              {" "}
              {course.duration}
            </span>
          </span>
        </p>

        <p className="flex justify-between">
          <span className="text-gray-500">
            Enrolled students:{" "}
            <span className="font-semibold text-orange-800">
              {course.students}
            </span>
          </span>
          <span className="flex items-center gap-1">
            <AiOutlineStar className="text-yellow-600" />
            {course.rating}
          </span>
        </p>

        <p className="text-gray-500 h-[4.5rem] -mt-[10rem]">
          {course.description.substring(0, 90)}...
        </p>
        <div className="flex justify-between">
          <p className="text-black font-black text-lg">
            {currencyConverter(course.price, "en-US", "USD")}
          </p>
          <Button href={`courses/${course.id}`} placeholder="View Datails" />
        </div>
      </div>
    </motion.div>
  );
};

export default CourseItem;
