import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between p-8">
      <div>
        <Image
          src={"/assets/mail.svg"}
          alt="Bate Papo"
          width={24}
          height={24}
        />
        <Image
          src={"/assets/bell.svg"}
          alt="Notificações"
          width={24}
          height={24}
        />

        <UserButton />
      </div>
    </header>
  );
}

export default Header;
