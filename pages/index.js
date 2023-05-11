import React from 'react'
import Courses from './courses';
import { getAllCourses } from '@/prisma/process';

const HomePage = ({courses}) => {
  return (
    <Courses courses={courses} />
  )
}

export default HomePage

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