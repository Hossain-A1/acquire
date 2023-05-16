import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { AiOutlineLogout } from "react-icons/ai";

const Profile = ({ session }) => {
  const router = useRouter();
  const logout = async () => {
    try {
      await signOut("google");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (!session) {
      router.replace("/users/profile");
    }
  }, [router,session]);

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen wrapper py-10 flex flex-col items-center">
      <Image
        src={session.user.image}
        alt={session.user.name}
        height={50}
        width={50}
        className="rounded-full border border-gray-700 p-[0.1rem]"
      />
      <h2 className="text-xl font-semibold">Welcome, {session.user.name}</h2>
      <button
        onClick={logout}
        className="flex items-center gap-2 border border-gray-300 hover:bg-gray-300 text-gray-950 duration-300 py-2 px-10 rounded mt-5 font-medium"
      >
        <span className="flex justify-between">
          <AiOutlineLogout className="text-2xl" />
        </span>
        Logout
      </button>
    </div>
  );
};

export default Profile;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
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
