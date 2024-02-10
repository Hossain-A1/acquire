import Image from "next/image";

const TeamMembers = ({ tutor }) => {
  return (
    <div className="slider flex flex-col justify-center  items-center gap-5"  data-aos="fade-up"
    data-aos-anchor-placement="top-center" data-aos-duration="500">
      <div className="w-[10rem] h-[10rem] overflow-hidden ">
        <Image
          src={tutor.photo}
          alt={tutor.name}
          width={640}
          height={360}
          priority
          className="w-full h-full object-cover rounded-full flex "
        />
      </div>

      <div className="w-[20%] text-center">
        <h2 className="capitalize text-2xl font-semibold ">{tutor.name}</h2>
        <p className=" font-medium text-gray-700 ">{tutor.career}</p>
      </div>

      <div className="flex flex-col justify-center text-justify items-center w-[60%]">
        <p>{tutor.details}</p>
      </div>
    </div>
  );
};

export default TeamMembers;
