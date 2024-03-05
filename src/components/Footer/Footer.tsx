import React from "react";
import cx from "classnames";
import "./Footer.css";
import logoImg from "img/everflow-logo.png";
import { NavLink } from "react-router-dom";
import { getFooterLinks, SOCIAL_LINKS } from "./constants";
import ExternalLink from "components/ExternalLink/ExternalLink";

type Props = { showRedirectModal?: (to: string) => void; redirectPopupTimestamp?: () => void };

export default function Footer({ showRedirectModal, redirectPopupTimestamp }: Props) {
  const isHome = true;

  return (
    <div className="Footer">
      <div className={cx("Footer-wrapper", { home: isHome })}>
        <div className="Footer-logo">
          <img src={logoImg} alt="Everflow Logo" />
          <div className="Footer-logo-title">EVERFLOW</div>
        </div>
        <div className="Footer-social-link-block">
          {SOCIAL_LINKS.map((platform) => {
            return (
              <ExternalLink key={platform.name} className="App-social-link" href={platform.link}>
                <img src={platform.icon} alt={platform.name} />
              </ExternalLink>
            );
          })}
        </div>
        <div className="Footer-links">
          {getFooterLinks(isHome).map(({ external, label, link, isAppLink }) => {
            if (external) {
              return (
                <ExternalLink key={label} href={link} className="Footer-link">
                  {label}
                </ExternalLink>
              );
            }
            return (
              <NavLink key={link} to={link} className="Footer-link" activeClassName="active">
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
