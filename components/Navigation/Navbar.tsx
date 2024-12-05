"use client";

import Link from "next/link";
import React from "react";
import Paths from "./Paths";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="max-w-2xl mx-4 sm:mx-auto py-8">
      <div className="flex justify-between items-center">
        <Image src={"/logo.png"} alt="logo" width={20} height={100} />
        <ul className="flex gap-5">
          {Paths.map((nav, idx) => {
            return (
              <li key={idx}>
                <Link
                  href={nav.Page}
                  className={cn(
                    pathname === nav.Page ? "underline" : " text-zinc-400"
                  )}
                >
                  {nav.Label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
