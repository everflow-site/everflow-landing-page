/* eslint-disable react-perf/jsx-no-new-object-as-prop */

import React from "react";
import "./Roadmap.scss";
import RoadmapDesktop from "./Desktop";
// import { Chrono } from "react-chrono";
import RoadmapMobile from "./Mobile";
import { useState, useEffect } from "react";
// Hook
function useMobileSize() {
  const [mobileSize, setMobileSize] = useState(false);
  useEffect(() => {
    function handleResize() {
      if (typeof window !== "undefined") {
        991 > window.innerWidth ? setMobileSize(true) : setMobileSize(false);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return mobileSize;
}

const Roadmap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(1);
  const isMobile = useMobileSize();
  const stateRoadmap = {
    activeNode: activeNode,
    nodes: [
      {
        label: "Q1 2024",
        section: {
          date: "Feb 1, 2024",
          desc: "EFT Token Launch",
        },
      },
      {
        label: "Q2 2024",
        section: {
          date: "Apr 1, 2024",
          desc: "EG Token Sale",
        },
      },
      {
        label: "Q2 2024",
        section: {
          date: "May 1, 2024",
          desc: "Everflow Testnet Launch",
        },
      },
      {
        label: "Q2 2024",
        section: {
          date: "Jun 1, 2024",
          desc: "Everflow Mainnet Launch",
        },
      },
      {
        label: "Q3 2024",
        section: {
          date: "July 1, 2024",
          desc: "Governance DAO",
        },
      },
    ],
  };

  return (
    <div className="roadmap-container" id="roadmap">
      <div className="roadmap-header">
        <div className="roadmap-heeader-title">Roadmap</div>
        <div className="roadmap-header-divider"></div>
        <div className="roadmap-header-subtitle">World's Fastest</div>
      </div>
      <div className="roadmap-content">
        {isMobile ? (
          <RoadmapMobile setActiveNode={setActiveNode} stateRoadmap={stateRoadmap} />
        ) : (
          <RoadmapDesktop setActiveNode={setActiveNode} stateRoadmap={stateRoadmap} />
        )}
      </div>
    </div>
  );
};

export default Roadmap;
