"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Bottombar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 mt-2 flex flex-1 justify-around gap-4 border-t border-zinc-200 bg-white p-2 md:hidden">
      {sidebarLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        return (
          <Link
            href={link.route}
            key={link.label}
            title={link.label}
            className={`flex items-center gap-4 rounded-xl border border-transparent p-2 hover:border-blue-900 max-lg:justify-center ${
              isActive && "bg-blue-300 hover:border-transparent"
            }`}
          >
            <Image src={link.imgURL} alt={link.label} width={24} height={24} />
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
  );
}

export default Bottombar;
