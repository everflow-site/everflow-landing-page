import "./Footer.css";
import xIcon from "img/ic_x.svg";
import telegramIcon from "img/ic_telegram.svg";
import githubIcon from "img/ic_github.svg";
import mediumLogo from "img/ic_medium.svg";

type Link = {
  label: string;
  link: string;
  external?: boolean;
  isAppLink?: boolean;
};

type SocialLink = {
  link: string;
  name: string;
  icon: string;
};

export function getFooterLinks(isHome) {
  const FOOTER_LINKS: { home: Link[]; app: Link[] } = {
    home: [
      // { label: `Terms and Conditions`, link: "/terms-and-conditions" },
      // { label: `Referral Terms`, link: "/referral-terms" },
      // { label: "Jobs", link: "/jobs", isAppLink: true },
    ],
    app: [
      // { label: "Jobs", link: "/jobs" },
    ],
  };
  return FOOTER_LINKS[isHome ? "home" : "app"];
}

export const SOCIAL_LINKS: SocialLink[] = [
  { link: "https://twitter.com/EverflowSite", name: "Twitter", icon: xIcon },
  { link: "https://t.me/everflow_official", name: "Telegram", icon: telegramIcon },
  { link: "https://github.com/everflow-site", name: "Github", icon: githubIcon },
  { link: "https://medium.com/@everflow_official/a-user-friendly-guide-to-everflows-innovative-platform-1a939b06b0fd", name: "Medium", icon: mediumLogo },
];
