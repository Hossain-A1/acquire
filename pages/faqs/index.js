const Faqs = () => {
  return (
    <div className='faqs py-10 w-[50%] mx-auto'>
      <div className='bg-black text-white'>
        <div className='flex gap-2'>
          <p>How do I purchase a course?</p>
          <button>+</button>
        </div>
        <p>{`To purchase a course, Visit all courses on our website, select the one you're interested in, and click on the 'Enroll' button. Follow the prompts to complete the payment process.`}</p>
      </div>
    </div>
  );
};

export default Faqs;
