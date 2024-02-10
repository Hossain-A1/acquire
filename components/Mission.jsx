const Mission = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 p-10 mt-10 gap-10 border" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
      <div className="misson space-y-5 col-span-2">
        <h2 className="text-2xl font-bold capitalize text-gray-900 border-b-2 pb-1 border-gray-900 w-[10rem]">
          Our Mission
        </h2>
        <p className="text-gray-700 text-lg">
          Welcome to our course selling website, where we aim to provide
          high-quality educational courses to help learners acquire new skills,
          advance their careers, and achieve their personal and professional
          goals. We believe that learning should be accessible to everyone,
          regardless of their background or location. Our mission is to provide
          a platform for people to buy and sell courses online. We strive to
          make learning accessible to everyone, regardless of location or
          financial constraints. We are dedicated to providing quality courses
          at a competitive price.
        </p>
      </div>
      <div className="facility space-y-5">
        <h2 className="text-2xl font-bold capitalize text-gray-900 border-b-2 pb-1 border-gray-900 w-[13rem]">
          Why Choose Us
        </h2>
        <ol className="text-gray-700 text-lg">
          <p>
            <span>◆</span> High-quality course materials and interactive
            learning resources
          </p>
          <p>
            <span>◆</span> Wide selection of courses from beginner to advanced
            levels
          </p>
          <p>
            <span>◆</span> Affordable pricing and occasional discounts
          </p>
          <p>
            <span>◆</span> Dedicated customer support to assist learners throughout their journey
          </p>
          <p>
            <span>◆</span> Flexible learning options, including self-paced and scheduled courses
          </p>
          <p>
            <span>◆</span>  Certificates of completion for successful course graduates
          </p>
        </ol>
      </div>
    </div>
  );
};

export default Mission;
