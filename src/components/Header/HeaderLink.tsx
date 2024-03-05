// @ts-nocheck
import React, { MouseEventHandler, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import "./Header.css";

type Props = {
  isHomeLink?: boolean;
  className?: string;
  exact?: boolean;
  to: string;
  showRedirectModal: (to: string) => void;
  redirectPopupTimestamp: number;
  onClick?: MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
  children?: ReactNode;
};

export function HeaderLink({
  isHomeLink,
  className,
  exact,
  to,
  children,
  redirectPopupTimestamp,
  showRedirectModal,
  onClick,
}: Props) {
  const isOnHomePage = window.location.pathname === "/";
  const isHome = true;


  return (
    <NavLink activeClassName="active" className={cx(className)} exact={exact} to={to} onClick={onClick}>
      {children}
    </NavLink>
  );
}
