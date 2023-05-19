import SectionTitle from "@/components/SectionTitle";
import { getCourse } from "@/prisma/process";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
// Stripe promise//
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Chackout = ({ course }) => {
  const { data: session } = useSession();

  const [usersFromData, setUsersFromData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: course.title,
    price: course.price,
  });
  useEffect(() => {
    if (session) {
      setUsersFromData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);
  /* Checkout Handler */
  const handleCheckout = async (e) => {
    e.preventDefault();

    const stripe = await stripePromise;
    /* Send a post request to the server */
    const checkoutSession = await axios.post("/api/create-checkout-session ", {
      items: [course],
      name: usersFromData.name,
      email: usersFromData.email,
      mobile: usersFromData.mobile,
      address: usersFromData.address,
      courseTitle: usersFromData.courseTitle,
      courseId:course.id
    });
    /*Redirect to the stripe payment */
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      console.log(result.error.message);
    }
  };
  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionTitle
        span="Checkout"
        h2="Please provide us your information"
        p="Fill out below the form to continue checkout"
      />

      <div className="flex justify-center">
        <form
          onSubmit={handleCheckout}
          className="flex flex-col gap-4 mt-10 w-full lg:w-[30rem]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-xl font-medium">
              Name
            </label>
            <input
              className="py-2 px-4 w-full border border-gray-400 outline-none focus:border-gray-500 duration-300 rounded"
              type="text"
              id="name"
              placeholder="Nico"
              value={usersFromData.name}
              readOnly
            />
          </div>

          <div className="flex flex-col  gap-2">
            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              className="py-2 px-4 w-full border border-gray-400 outline-none focus:border-gray-500 duration-300 rounded"
              type="email"
              id="email"
              placeholder="nico@example.com"
              value={usersFromData.email}
              readOnly
            />
          </div>

          <div className="flex j flex-col  gap-2">
            <label htmlFor="mobile" className="text-xl font-medium">
              Phone number
            </label>
            <input
              className="py-2 px-4 w-full border border-gray-400 outline-none focus:border-gray-500 duration-300 rounded"
              type="tel"
              id="mobile"
              placeholder="966050xxxxxx6"
              value={usersFromData.mobile}
              onChange={(e) =>
                setUsersFromData({ ...usersFromData, mobile: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col  gap-2">
            <label htmlFor="address" className="text-xl font-medium">
              Address
            </label>
            <input
              className="py-2 px-4 w-full border border-gray-400 outline-none focus:border-gray-500 duration-300 rounded"
              type="text"
              id="address"
              placeholder="dammam Dc-abc"
              value={usersFromData.address}
              onChange={(e) =>
                setUsersFromData({ ...usersFromData, address: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col  gap-2">
            <label htmlFor="courseTitle" className="text-xl font-medium">
              Course title
            </label>
            <input
              className="py-2 px-4 w-full border border-gray-400 outline-none focus:border-gray-500 duration-300 rounded"
              type="text"
              id="courseTitle"
              placeholder="Advanced web design"
              value={usersFromData.courseTitle}
              readOnly
            />
          </div>

          <div className="flex  flex-col gap-2">
            <label htmlFor="price" className="text-xl font-medium">
              Price (USD)
            </label>
            <input
              className="py-2 px-4 w-full border border-gray-400 outline-none focus:border-gray-500 duration-300 rounded"
              type="number"
              id="price"
              placeholder="$101"
              value={usersFromData.price}
              readOnly
            />
          </div>
          <button
            role="link"
            type="submit"
            className=" bg-black text-white py-2 px-4 w-full rounded focus:text-orange-800 uppercase"
          >
            Checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chackout;

export const getServerSideProps = async ({ query }) => {
  const course = await getCourse(query.courseId);

  const updatedCourses = {
    ...course,
    updatedAt: course.updatedAt.toString(),
    createdAt: course.createdAt.toString(),
  };
  return {
    props: {
      course: updatedCourses,
    },
  };
};
