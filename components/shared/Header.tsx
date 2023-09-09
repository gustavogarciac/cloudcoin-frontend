import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <div>
        <h1 className="font-quicksand text-xl font-bold text-zinc-900">
          Your financial dashboard
        </h1>
        <p className="text-sm text-zinc-700">
          Get summary of your weekly transactions here
        </p>
      </div>
      <div className="flex items-center gap-8">
        <Image
          src={"/assets/mail.svg"}
          alt="Bate Papo"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Image
          src={"/assets/bell.svg"}
          alt="Notificações"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        <UserButton />
      </div>
    </header>
  );
}

export default Header;
