import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";

interface UserProps {
  id: string;
  username: string;
  name: string;
  bio: string;
  image: string;
}

async function Page() {
  const user = await currentUser();

  const userInfo = {} as UserProps; // TODO: Function that check if user already exists

  const userData = {
    id: user!.id,
    username: userInfo?.username || user!.username,
    name: userInfo?.name || user!.firstName,
    bio: userInfo?.bio || "",
    image: userInfo?.image || user!.imageUrl,
  };

  return (
    <main className="w-full max-w-2xl rounded-md bg-zinc-50 p-8">
      <h1 className="text-center font-quicksand text-2xl font-bold leading-relaxed text-zinc-900">
        Onboarding
      </h1>
      <p className="text-center text-lg text-zinc-700">
        Complete your informations to keep tracking your finances.
      </p>
      <section className="mt-4">
        <AccountProfile user={userData} />
      </section>
    </main>
  );
}

export default Page;
