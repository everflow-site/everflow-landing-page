// @ts-nocheck
import { FiX } from "react-icons/fi";
import logoImg from "img/everflow-logo.png";

import "./Header.css";
import { Link } from "react-router-dom";
import ExternalLink from "components/ExternalLink/ExternalLink";

type Props = {
  small?: boolean;
  clickCloseIcon?: () => void;
};

type HomeLink = { label: string; link: string; isHomeLink?: boolean | false };

export function HomeHeaderLinks({ small, clickCloseIcon }: Props) {  
  const HOME_MENUS: HomeLink[] = [
    {
      label: `App`,
      isScroll: true
    },
    {
      label: `Bridge`,
      isScroll: false
    },
    {
      label: `Swap`,
      isScroll: true
    },
    {
      label: `Roadmap`,
      isScroll: true
    },
  ];
  return (
    <div className="App-header-links">
      {small && (
        <div className="App-header-links-header">
          <Link className="App-header-link-main" to="/">
            <img src={logoImg} alt="Everflow Logo" />
          </Link>
          <div
            className="App-header-menu-icon-block mobile-cross-menu"
            onClick={() => clickCloseIcon && clickCloseIcon()}
          >
            <FiX className="App-header-menu-icon" />
          </div>
        </div>
      )}
      {HOME_MENUS.map(({ isScroll, label }) => {
        return (
          <div key={label} className="App-header-link-container">
            <ExternalLink scrollId={isScroll ? label.toLocaleLowerCase() : ""}>{label}</ExternalLink>
          </div>
        );
      })}
    </div>
  );
}
