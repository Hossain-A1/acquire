import prisma from "./prisma";

// get al courses
export const getAllCourses = async () => {
  const courses = await prisma.course?.findMany({});
  if (!courses) {
    throw new Error("All courses not get");
  }

  return courses;
};
//get a single course
export const getCourse = async (id) => {
  const course = await prisma.course.findUnique({
    where: { id },
  });
  return course;
};

//get team members
export const getTeam = async () => {
  const tutors = await prisma.tutor.findMany({});
  return tutors;
};
