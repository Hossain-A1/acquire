import CourseItem from "@/components/CourseItem";
import SectionTitle from "@/components/SectionTitle";
import { getAllCourses } from "@/prisma/process";

const CoursesPage = ({ courses }) => {
  return (
    <div className="wrapper h-full w-full py-10">
      <SectionTitle
        span="Courses"
        h2="Visit all courses"
        p="
        acquire website is an online store for course selling. It facilities to students to achieve their aims. This website has included the best successful courses, It's high time to enrol these courses for a better future. 
        "
      />

      <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 items-center gap-5">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;

export const getServerSideProps = async () => {
  const courses = await getAllCourses();

  const updatedCourses = courses.map((course) => ({
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  }));
  return {
    props: {
      courses: updatedCourses,
    },
  };
};
