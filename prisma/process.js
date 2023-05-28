import prisma from "./prisma";

// get al courses
export const getAllCourses = async () => {
  const courses = await prisma.course.findMany({});

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
export const getTeamMembers = async () => {
  const teams = await prisma.team.findMany({});

  return teams;
};
