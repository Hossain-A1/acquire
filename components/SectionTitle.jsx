const SectionTitle = ({ span, h2, p }) => {
  return (
    <div className="flex items-center flex-col text-center">
      <span className="uppercase text-sm font-bold tracking-widest">
        {span}
      </span>
      <h2 className=" text-xl text-orange-800 font-medium">{h2}</h2>
      <p className="text-gray-400 w-4/5">{p}</p>
    </div>
  );
};

export default SectionTitle;
