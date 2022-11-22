import React, { useState } from "react";
import { tabs } from "../data";

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState("0");
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id);
  };

  return (
    <>
      <section className="mt-16 p-5 md:px-20">
        <h2
          className="flex justify-center md:underline md:underline-offset-4 text-green  p-8  text-3xl font-mono text-textlightWhite font-extrabold tracking-wide"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          More About Me
        </h2>

        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          className="container mx-auto relative mt-5 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between md:space-x-4 md:w-[80%] "
        >
          <div className="flex justify-between items-center md:flex-col md:h-60 h-auto">
            <div className="hidden"></div>

            {tabs.map((tab, i) => {
              return (
                <button
                  disabled={currentTab === `${tab.id}`}
                  id={i}
                  key={i}
                  onClick={handleTabClick}
                  className="tabs disabled:bg-light-navy disabled:border-b-green disabled:md:border-l-green text-textlightWhite w-full md:border-l-2 md:border-b-0 bottom-2 text-center text-xs md:text-base border-b-2 border-b-lightest-navy md:border-l-lightest-navy p-5 h-[4rem] md:h-full cursor-pointer ease-in-out delay-200"
                >
                  {tab.tabTitle}
                </button>
              );
            })}
          </div>
          <div className="md:w-[90%] h-[15rem]">
            {tabs.map(
              (tab, i) =>
                currentTab === `${tab.id}` && (
                  <div
                    id={i}
                    key={i}
                    className="tabcontent text-textlightWhite font-Roboto delay-200"
                  >
                    <ul className="space-y-4">
                      {tab.content.map((list, i) => {
                        return (
                          <li key={i}>
                            <span className="text-textgreen pr-2">▹</span>
                            <span className="opacity-70 tracking-wide font-Roboto text-sm">
                              {list}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tabs;
