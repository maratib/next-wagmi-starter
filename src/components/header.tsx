import React, { FC } from "react";
import { NavBar } from "./nav-bar";

type Props = {
  name?: string;
};

export const Header: FC<Props> = ({ name }) => (
  <div>
    <NavBar />
  </div>
);
