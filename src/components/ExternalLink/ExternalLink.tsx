import React from "react";
import cx from "classnames";
import "./ExternalLink.scss";

type Props = {
  scrollId?: string;
  href: string,
  children: React.ReactNode;
  className?: string;
  newTab?: boolean;
};

function ExternalLink({ scrollId, href, children, className, newTab = true }: Props) {
  const scrollTo = (id: string) => {
    console.log(id);
    if(id != "") {
      document
      .querySelector(`#${id}`)
      ?.scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };

  const classNames = cx("link-underline", className);
  const props = {
    href,
    className: classNames,
    ...(newTab
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {}),
  };
  return <div onClick={() => scrollTo(scrollId ? scrollId : "")}><a {...props}>{children}</a></div>;
}

export default ExternalLink;
