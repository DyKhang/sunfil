import { CallToActions } from "@/components/CallToActions";
import { Search } from "@/components/Search";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Top = () => {
  return (
    <div className="flex items-center justify-between">
      <Link href="/">
        <Image alt="logo" src="/logo.png" width={250} height={110} />
      </Link>
      <Search />
      <CallToActions />
    </div>
  );
};
