import { useRef } from "react";
import emailJs from "@emailjs/browser";

const Contact = () => {
  const fromRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration
    emailJs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        fromRef.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID
      )
      .then(
        () => {
          console.log("message sent");
        },
        () => {
          console.log("message feild");
        }
      );

    //reset fromFields
  };
  return (
    <div className="wrapper grid grid-cols-1 lg:grid-cols-2 gap-10">
      <form onSubmit={handleSubmit} className="py-5 lg:py-10" ref={fromRef}>
        <h1 className="text-4xl text-rose-500 uppercase mb-10">
          Cntact for course
        </h1>

        <div className="flex flex-col gap-3 mb-5">
          <label
            className="text-gray-600 uppercase tracking-wider"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border py-4 px-5 outline-none focus:border-gray-500 duration-300"
            id="name"
            name="name"
            type="text"
            placeholder="Write your name"
          />
          <label className="text-gray-600 uppercase" htmlFor="email">
            Eamil
          </label>
          <input
            className="border py-4 px-5 outline-none  focus:border-gray-500 duration-300"
            id="email"
            name="email"
            type="email"
            placeholder="Write your email"
            required
          />
          <label className="text-gray-600 uppercase" htmlFor="message">
            Message
          </label>
          <textarea
            className="border text-gray-500 outline-none px-5 py-4   focus:border-gray-500 duration-300"
            name="message"
            id="message"
            cols="10"
            rows="6"
            placeholder="message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-2 px-4 bg-rose-700 text-white rounded"
        >
          Submit
        </button>
      </form>

      <div className=" lg:py-32 space-y-5">
        <div className="space-y-2">
          <h2 className="text-gray-700 font-medium uppercase text-x">
            RETURN ADDRESS FOR ONLINE ORDERS:
          </h2>
          <p className="text-sm uppercase">
            1600 Pennsylvania Ave NW, Washington, DC 20500
          </p>
        </div>
        <div className="space-y-2">
          <h2 className="text-gray-500 font-medium uppercase text-xl">
            Phone number:
          </h2>
          <span>012-365-6389</span>
        </div>
        <div className="space-y-2">
          <h2 className="text-gray-500 font-medium uppercase text-xl">
            email address
          </h2>
          <span>contact@ecquire.com</span>
        </div>
        <div className="space-y-2">
          <h2 className="text-gray-500 font-medium uppercase text-xl">
            Contact in time
          </h2>
          <span>sun-fri: 8:00am - 8:00pm</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
