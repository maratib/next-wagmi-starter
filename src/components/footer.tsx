import React, { FC } from "react";

type Props = {
  name?: string;
};

export const Footer: FC<Props> = ({ name }) => (
  <div>
    <h1>Footer</h1>
  </div>
);
