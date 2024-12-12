"use client";
import React, { forwardRef, useState } from "react";
import Summary from "./Resume-components/Summary";
import Education from "./Resume-components/Education";
import Experience from "./Resume-components/Experience";

const Resume = ({ text }, ref) => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div
      className="px-8 pt-16 pb-40 bg-gradient-to-r from-slate-300 to-white"
      ref={ref}
    >
      <div className="mb-6 text-center">
        <h1 className="text-4xl">{text}</h1>
      </div>
      <div className="flex flex-col items-center">
        <header className="w-auto flex flex-row mb-4 justify-center rounded-md bg-gradient-to-r from-slate-300 to-white border-gray-500 border-2 lg:gap-4 lg:px-4">
          <button
            onClick={() => setSelectedTab(1)}
            className={`${selectedTab === 1 && "text-rose-500"} px-4 py-3`}
          >
            Summary
          </button>
          <button
            onClick={() => setSelectedTab(2)}
            className={`${selectedTab === 2 && "text-rose-500"} px-4 py-3`}
          >
            Education
          </button>
          <button
            onClick={() => setSelectedTab(3)}
            className={`${selectedTab === 3 && "text-rose-500"} px-4 py-3`}
          >
            Experience
          </button>
        </header>
        <div>
          <Summary selectedTab={selectedTab} />
          <Education selectedTab={selectedTab} />
          <Experience selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  );
};
export default forwardRef(Resume);
