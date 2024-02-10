import SectionTitle from "@/components/SectionTitle";
import { FcGoogle } from "react-icons/fc";
import { signIn, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import toast from "react-hot-toast";
const Login = ({ session }) => {
  const router = useRouter();
  const loginWithGoogle = async () => {
    try {
      await signIn("google");
    } catch (err) {
      console.log(err.message);
    }
    toast.success("Login has Successfully!");
  };

  useEffect(() => {
    if (session) {
      const destination = router.query.destination || "/";
      router.replace(destination);
    }
  }, [router, session]);

  if (session) {
    return null;
  }
  if (!session) {
    return (
      <div className='wrapper py-10 min-h-screen'>
        <SectionTitle
          span={"login"}
          h2={"Get stared with Google"}
          p={"Login to continue with our features! "}
        />
        <div className='flex justify-center'>
          <button
            onClick={loginWithGoogle}
            className='flex items-center gap-2 border border-gray-300 hover:bg-gray-300 text-gray-950 duration-300 py-2 px-10 rounded mt-10 font-medium'
          >
            <span className='flex justify-between'>
              <FcGoogle className='text-2xl' />
            </span>
            Login in with Google
          </button>
        </div>
      </div>
    );
  }
};

export default Login;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    const destination = context.query.destination || "/";

    return {
      redirect: {
        destination,
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};
