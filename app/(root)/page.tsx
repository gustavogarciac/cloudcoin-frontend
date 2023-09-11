import { UserButton, currentUser, useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Header from "@/components/shared/Header";
import TransactionHistory from "@/components/shared/Home/TransactionHistory";
import Goals from "@/components/shared/Home/Goals";

async function Home() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");

  return (
    <div className="w-full">
      <Header />
      <main className="grid grid-cols-2 gap-6">
        <TransactionHistory userId={user.id} />
        <Goals />
      </main>
    </div>
  );
}

export default Home;
