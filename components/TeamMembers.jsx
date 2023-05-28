import Image from "next/image";

const TeamMembers = ({ team }) => {
  return (
    <div className="slider">
      <div className="w-[10rem] h-[10rem] overflow-hidden flex">
        <Image
          src={team.photo}
          alt={team.name}
          width={640}
          height={360}
          priority
          className="w-full h-full object-cover rounded-full flex"
        />
      </div>

      <div className="flex flex-col items-center">
        <h2 className="capitalize text-lg font-semibold tracking-widest">
          {team.name}
        </h2>
        <p className="text-sm font-medium ">{team.career}</p>
      </div>
    </div>
  );
};

export default TeamMembers;
