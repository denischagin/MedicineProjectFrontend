import React, { FC, RefAttributes } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

interface LinkProps extends NavLinkProps, RefAttributes<HTMLAnchorElement> {
  to: string;
}

export const Link: FC<LinkProps> = ({ to, className, ...restProps }) => {
  return <NavLink to={to} className={className} {...restProps} />;
};
