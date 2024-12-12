import React from "react";

const Experience = ({ selectedTab }) => {
  return (
    <div className={selectedTab === 3 ? "show-content" : "content"}>
      <div className="block max-w-2xl text-center p-10 mb-2 bg-gradient-to-r from-slate-300 to-white border border-gray-500 rounded-lg shadow ">
        <h5 className="mb-2 text-lg font-bold tracking-tight">
          Zephyr technologies and solutions (Intern)
        </h5>
        <ul className="font-normal text-gray-500">
          <li>
            * Assisted in developing and implementing machine learning models to
            analyze trends and generate actionable insights, improving project
            outcomes.
          </li>
          <li>
            * Developed a Heart disease prediction analysis project utilizing
            Python and Machine learning techniques to identify risk factors and
            predict the likelihood of heart disease in patients.
          </li>
          <li>
            * Developed a Heart disease prediction analysis project utilizing
            Python and Machine learning techniques to forecast the likelihood of
            diabetes in individuals.
          </li>
        </ul>
      </div>

      <div className="block max-w-2xl p-10 text-center bg-gradient-to-r from-slate-300 to-white border border-gray-500 rounded-lg shadow ">
        <h5 className="mb-2 text-lg font-bold tracking-tight">
          Cogent E-services pvt limited (2023 - 2024)
        </h5>
        <ul className="font-normal text-gray-500">
          <li>
            * Provided exceptional support to customers through phone addressing
            inqueries and resolving issues promptly.
          </li>
          <li>
            * Handled customers complaints effectively, identifying root causes
            and implementing solutions to enchance satisfaction.
          </li>
          <li>
            * Maintained accurate records of customer interations in the CRM
            system, ensuring timely follow-ups and documentation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
