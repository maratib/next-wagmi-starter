import Link from "next/link";
import React, { FC } from "react";

type Props = {
  name?: string;
};

export const NavBar: FC<Props> = ({ name }) => {
  return (
    <div className="flex gap-10">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </div>
  );
};
