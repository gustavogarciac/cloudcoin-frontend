import { UserButton, currentUser, useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Header from "@/components/shared/Header";
import TransactionHistory from "@/components/shared/Home/TransactionHistory";
import Goals from "@/components/shared/Home/Goals";
import Cards from "@/components/shared/Home/Cards";

async function Home() {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  console.log(user);

  return (
    <div className="w-full">
      <Header />
      <main className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Cards userFirstName={user.firstName!} />
        <TransactionHistory userId={user.id} />
        <Goals />
      </main>
    </div>
  );
}

export default Home;
