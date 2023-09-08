import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <main className="flex flex-col gap-6 items-center">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/logo.svg"
          alt="Logo Cloudcoin"
          width={90}
          height={90}
        />
        <span className="font-quicksand text-xl font-bold text-zinc-950 leading-relaxed">
          cloudcoin
        </span>
      </div>
      <SignIn />
    </main>
  );
}
