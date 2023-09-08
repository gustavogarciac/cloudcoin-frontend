import { UserButton, currentUser, useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

async function Home() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return (
    <main>
      <h1>Página Home</h1>
      <UserButton afterSignOutUrl="/" />
      <Button variant={"secondary"}>Lohan</Button>
    </main>
  );
}

export default Home;
