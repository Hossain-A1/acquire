import { getCourse } from "@/prisma/process";

const CourseVideos = ({course}) => {
  return (
    <div>
      <h2>{course.title}</h2>
    </div>
  )
}

export default CourseVideos

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
