import AccountProfile from "@/components/forms/AccountProfile";

function Page() {
  return (
    <div className="w-full max-w-2xl rounded-md bg-zinc-50 p-8">
      <h1 className="text-center font-quicksand text-2xl font-bold leading-relaxed text-zinc-900">
        Onboarding
      </h1>
      <p className="text-center text-lg text-zinc-700">
        Complete your informations to keep tracking your finances.
      </p>
      <AccountProfile />
    </div>
  );
}

export default Page;
