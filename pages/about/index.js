import Mission from "@/components/Mission";
import TeamMembers from "@/components/TeamMembers";
import { getTeam } from "@/prisma/process";
const About = ({ tutors }) => {
  return (
    <div className="wrapper py-10">
    
    <div className="text-center mx-auto w-[60vw] space-y-2 ">
      <h2 className="uppercase text-gray-900 tracking-widest font-semibold">About us</h2>
      <h2 className="text-3xl text-gray-900">Hard worker learners to achieve their goals.</h2>
      <p className=" text-gray-500">Acquire is an example of a course selling website which offers thousands of online courses in various categories such as business, technology, health, tech, fitness, and more. Acquire provides an easy way for students to learn new skills and for instructors to share their knowledge with the world.</p>
    </div>
      
      

      <div className="flex flex-col justify-center gap-10 py-10">
      <h1 className="text-center font-bold text-2xl ">Meet The Team</h1>
        {tutors.map((tutor) => (
          <TeamMembers key={tutor.id} tutor={tutor} />
        ))}
      </div>
      <Mission/>
    </div>
  );
};

export default About;

export const getServerSideProps = async () => {
  const tutors = await getTeam();

  return {
    props: {
      tutors,
    },
  };
};
