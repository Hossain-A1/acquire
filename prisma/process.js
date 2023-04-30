import prisma from "./prisma";

// get al courses
export const getAllCourses = async () => {
  const courses = await prisma.course.findMany({});

  return courses;
};
//get a single course
export const getCourse = async () => {
  const course = await prisma.course.findUnique({
    where: { id: id },
  });
  return course
};
