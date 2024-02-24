import { signIn, signOut, useSession } from 'next-auth/react';

export const SignInBtn = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      <button
        className="text-orange-300 bg-slate-950 p-2 rounded	"
        onClick={() => signIn()}
      >
        Sign in
      </button>
    </>
  );
};
