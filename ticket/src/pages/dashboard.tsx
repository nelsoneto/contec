import { GetServerSideProps } from "next";
import { getSession, signOut, useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();
  return (
    <section className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col items-center">
        <h2 className="m-[1rem] font-extrabold text-[30px]">Dashboard</h2>
        <div className="flex flex-wrap">
          <div className="">
            <img
              className="rounded-full w-[80px] h-[80px]"
              src="https://avatars.githubusercontent.com/u/86265413?v=4"
              alt="user avatar"
            />
          </div>
          <div className="flex flex-col ml-6 justify-center">
            <h2> {session?.user?.name}</h2>
            <p> {session.user.email}</p>
          </div>
        </div>
        <button onClick={() => signOut()}>Sair</button>
      </div>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
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
