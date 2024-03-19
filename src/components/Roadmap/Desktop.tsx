/* eslint-disable react-perf/jsx-no-new-object-as-prop */

import React, { Dispatch, SetStateAction } from "react";
import "./Roadmap.scss";

interface RoadmapDesktopProps {
  stateRoadmap: {
    activeNode: number;
    nodes:
      | {
          label: string;
          section: {
            date: string;
            desc: string;
          };
        }[]
      | [];
  };
  setActiveNode: Dispatch<SetStateAction<number>>;
}

const RoadmapDesktop = ({ stateRoadmap, setActiveNode }: RoadmapDesktopProps) => {
  const widthMaxNode = window.screen.width / stateRoadmap?.nodes?.length;
  return (
    <div className="timeline centered-content relative">
      <div className="timeline-line" />
      <div>
        <div
          className="timeline-line-2"
          style={{
            zIndex: "2",
            left: "10%",
            width: 250 * stateRoadmap?.nodes?.length + "px",
          }}
        />
      </div>

      <div className="timeline-content">
        {stateRoadmap?.nodes?.map((o, i) => {
          const indexModulus = i % 2;
          // rotate-180
          return (
            <div className="timeline-dot" key={"map-" + i}>
              <div className="flex-col just-item-center relative">
                <div className={`font-assistant b-600 text-14 ${!indexModulus ? "h-100" : "mt-80"}`}>{o?.label}</div>
                <div
                  className={`timeline-dot-outer centered-content timeline-dot-shadow ${indexModulus && "rotate-180"}
                      ${stateRoadmap?.activeNode >= i + 1 && "active"}
                      `}
                  onClick={() => setActiveNode(i + 1)}
                >
                  <div className="timeline-dot-inner" />
                  <div className="timeline-dot-line-horizontal" />
                  {i === 0 && (
                    <div
                      style={{
                        position: "absolute",
                        left: "20px",
                        top: "22px",
                        width: "100vw",
                        height: "20px",
                        transform: "rotate(-180deg)",
                        transformOrigin: "0% 0%",
                      }}
                    >
                      <div
                        className="timeline-line-dotted"
                        style={{
                          zIndex: "1",
                          left: 0,
                          width: "100vw",
                          // width: widthMaxNode + "px",
                        }}
                      />
                    </div>
                  )}
                  {stateRoadmap?.activeNode >= i + 1 && (
                    <>
                      {i === stateRoadmap?.activeNode - 1 && indexModulus ? (
                        <div
                          className={`timeline-line-dotted`}
                          style={{
                            zIndex: "1",
                            position: "absolute",
                            left: "20px",
                            width: "250px",
                          }}
                        />
                      ) : (
                        <></>
                      )}
                      {!indexModulus && stateRoadmap?.activeNode - 1 !== i ? (
                        <div
                          className="timeline-line-dotted"
                          style={{
                            position: "absolute",
                            left: "20px",
                            width: "250px",
                          }}
                        />
                      ) : (
                        <>
                          {stateRoadmap?.activeNode - 1 !== i && (
                            <div
                              className={`timeline-line-dotted`}
                              style={{
                                zIndex: "1",
                                position: "absolute",
                                right: "20px",
                                width: "250px",
                              }}
                            />
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
                {stateRoadmap?.activeNode === i + 1 ? (
                  <>
                    <div
                      className={`${indexModulus ? "timeline-section-top" : "timeline-section-bottom"}`}
                      style={{
                        paddingLeft: "40px",
                      }}
                    >
                      <div className="timeline-label-active">
                        <div className="font-manrope text-24 pb-5 timeline-label-active-date">{o?.section?.date}</div>
                        <div className="font-manrope text-14 timeline-label-active-label">{o?.section?.desc}</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className={`${indexModulus ? "timeline-section-top" : "timeline-section-bottom"}`}>
                      <div
                        className="text-24 pb-5 text-primary text-center font-manrope"
                        style={{
                          width: "100%",
                        }}
                      >
                        <b>{o?.section?.date} </b>
                        <br />
                        <span className="font-manrope text-14 text-primary text-center">{o?.section?.desc}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapDesktop;
