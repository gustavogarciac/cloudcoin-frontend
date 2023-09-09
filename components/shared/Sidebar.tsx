"use client";

import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="md flex flex-col gap-6 border-r border-zinc-200 p-8 max-md:hidden md:max-w-[250px] lg:w-full">
      <Link href={"/"} className="flex items-center gap-6">
        <Image
          src={"/assets/logo.svg"}
          alt="Logo Cloudcoin"
          width={42}
          height={42}
          className="text-zinc-800"
        />
        <h2 className="font-quicksand text-xl leading-relaxed max-lg:hidden">
          cloudcoin
        </h2>
      </Link>

      <nav className="mt-2 flex flex-1 flex-col gap-4">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`flex items-center gap-4 rounded-xl border border-transparent p-2 hover:border-blue-900 max-lg:justify-center ${
                isActive && "bg-blue-300 hover:border-transparent"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p
                className={`font-quicksand text-zinc-800 max-lg:hidden ${
                  isActive && "font-bold text-blue-900"
                }`}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
      </nav>

      <SignedIn>
        <SignOutButton signOutCallback={() => router.push("/sign-in")}>
          <div className="flex items-center justify-center gap-2">
            <Image
              src={"/assets/logout.svg"}
              alt="Sair da aplicação"
              width={24}
              height={24}
            />
            <p className="font-quicksand text-zinc-900 max-lg:hidden">Logout</p>
          </div>
        </SignOutButton>
      </SignedIn>
    </aside>
  );
}

export default Sidebar;
