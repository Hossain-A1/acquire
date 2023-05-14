import Button from "@/components/Button";
import { getCourse } from "@/prisma/process";
import { currencyConverter } from "@/utils/currencyConverter";

const CourseItem = ({ course }) => {
  return (
    <div className="wrapper py-10 min-h-screen">
      <div className="h-[20rem] w-full bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${course.cover})`}} 
      />

    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 space-y-2 lg:space-y-0">
      <div className="left space-y-2">
      <h2 className="text-4xl font-semibold truncate">{course.title}</h2>
      <p><span className="font-semibold">Instructor::</span>  {course.instructor}</p>
      <p><span className="font-semibold">Description:</span> {course.description}</p>
      <p> <span className="font-semibold">Enthrolled Students:</span> {course.students}</p>
      </div>

      <div className="right space-y-2">
        <p><span className="font-semibold">Duration:</span>  {course.duration}</p>
        <p><span className="font-semibold">Rating:</span>  {course.rating}</p>
        <p className="font-semibold text-3xl">Price:{currencyConverter(course.price)}</p>
        <Button href="checktout" placeholder="Enroll now" size="full"/>
      </div>
    </div>
      
    </div>
  );
};

export default CourseItem;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  const updatedCourses = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };
  return {
    props: {
      course: updatedCourses,
    },
  };
};
