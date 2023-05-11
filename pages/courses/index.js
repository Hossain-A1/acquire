import CourseItem from "@/components/CourseItem";
import SectionTitle from "@/components/SectionTitle";
import { getAllCourses } from "@/prisma/process";

const Courses = ({ courses }) => {
  return (
    <div className="wrapper py-10">
      <SectionTitle
        span="Courses"
        h2="Visit all courses"
        p="serves to state the rationale for the course and give an overview of key content covered, skills and knowledge to be learned, and how it will benefit the student."
      />

      <div className="mt-10 flex flex-wrap gap-5">
        {courses.map((course) => (
          <CourseItem key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;

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
