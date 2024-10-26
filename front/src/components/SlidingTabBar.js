/*
** E.Marques PROJECT, 2024
** esteban-marques-web-cv
** File description:
** SlidingTabBar
*/

import React, { useEffect, useRef, useState } from "react";

export default function SlidingTabBar({ tabs, activeTabIndex, setActiveTabIndex, setActiveSkillIndex }) {
  const tabsRef = useRef([]);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) return;

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
    setActiveSkillIndex(null);
  }, [activeTabIndex, tabs, setActiveSkillIndex]);

  useEffect(() => {
    if (tabs.length > 0) {
        const setTabPosition = () => {
            const currentTab = tabsRef.current[activeTabIndex];
            setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
            setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
        };

        setTabPosition();
    }
}, [tabs, setActiveTabIndex, activeTabIndex]);


  return (
    <div className="flex-row relative mx-auto flex h-12 rounded-3xl border border-black/40 bg-neutral-800 px-2 backdrop-blur-sm">
      <span
        className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
        style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
      >
        <span className="h-full w-full rounded-3xl bg-gray-200/30" />
      </span>
      {tabs.map((tab, index) => {
        const isActive = activeTabIndex === index;

        return (
          <button
            key={index}
            ref={(el) => (tabsRef.current[index] = el)}
            className={`${
              isActive ? "" : "hover:text-neutral-300"
            } my-auto cursor-pointer select-none rounded-full px-4 text-center font-semibold text-white`}
            onClick={() => setActiveTabIndex(index)}
          >
            {tab.name}
          </button>
        );
      })}
    </div>
  );
}
