/* eslint-disable react-perf/jsx-no-new-object-as-prop */
import React, { Dispatch, SetStateAction } from "react";
import "./Roadmap.scss";

interface RoadmapDesktopProps {
  stateRoadmap: {
    activeNode: number,
    nodes: {
      label: string,
      section: {
        date: string,
        desc: string,
      }
    }[] | []
  },
  setActiveNode: Dispatch<SetStateAction<number>>;
}

export default function RoadmapMobile({stateRoadmap, setActiveNode}: RoadmapDesktopProps) {

  const heightOfNode = 150;
  return (
    <>
      <div className="m-timeline centered-content relative">
        <div
          className="m-timeline-line"
          style={{
            height: stateRoadmap?.nodes?.length * heightOfNode + "px",
            marginTop: "20px",
          }}
        />
        <div className="m-timeline-content">
          {stateRoadmap?.nodes?.map((o, i) => {
            const indexModulus = i % 2;
            return (
              <div
                className="m-timeline-dot"
                key={"map-" + i}
                style={{
                  height: heightOfNode,
                  justifyContent: indexModulus ? "right" : "left",
                }}
                onClick={() => setActiveNode(i + 1)}
              >
                <div
                  className="flex-col"
                  style={{
                    width: "45%",
                    textAlign: indexModulus ? "right" : "left",
                  }}
                >
                  {stateRoadmap?.activeNode > i + 1 && (
                    <div
                      className="m-timeline-dot-active"
                      style={{
                        height: heightOfNode + "px",
                      }}
                    />
                  )}
                  <div
                    className={`font-pacifico bold flex ${indexModulus ? "justify-end" : "justify-start"}`}
                    style={{
                      textAlign: "right",
                      width: "100%",
                      zIndex: "2",
                    }}
                  >
                    <div
                      className="font-assistant"
                      style={{
                        background: "#F4F9FE",
                        paddingRight: indexModulus ? "0px" : "20px",
                        paddingLeft: indexModulus ? "20px" : "0px",
                      }}
                    >
                      {o?.label}
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      marginLeft: "-20px",
                      top: "-10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      zIndex: "1",
                    }}
                  >
                    <div
                      className={`timeline-dot-outer centered-content timeline-dot-shadow ${
                        indexModulus && "rotate-180"
                      }
                      ${stateRoadmap?.activeNode >= i + 1 && "active"}
                      `}
                    >
                      <div className="timeline-dot-inner" />
                      <div
                        className="m-timeline-dot-line-horizontal"
                        style={{
                          right: "10px",
                        }}
                      />
                    </div>
                  </div>
                  {i === stateRoadmap?.nodes?.length - 1 && (
                    <div
                      className={`${indexModulus ? "left-0" : "right-0"}`}
                      style={{
                        position: "absolute",
                        background: "#F4F9FE",
                        zIndex: 0,
                        width: "49vw",
                        height: heightOfNode + 20 + "px",
                      }}
                    ></div>
                  )}
                  <div className={`${indexModulus && "flex justify-end "} mt-20`}>
                    <div
                      style={{
                        width: "30vw",
                      }}
                    >
                      <div
                        className={`font-manrope text-16 ${
                          stateRoadmap?.activeNode === i + 1 && "m-timeline-label-active-date bold"
                        }`}
                      >
                        {o?.section?.date}
                      </div>
                      <div
                        className={`font-manrope text-14 ${
                          stateRoadmap?.activeNode === i + 1 && "m-timeline-label-active-label"
                        }`}
                      >
                        {o?.section?.desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
