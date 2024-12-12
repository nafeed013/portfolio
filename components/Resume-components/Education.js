import React from "react";

const Education = ({ selectedTab }) => {
  return (
    <div className={`${selectedTab === 2 ? "show-content" : "content"}`}>
      <div className="block max-w-2xl text-center p-10 mb-2 bg-gradient-to-r from-slate-300 to-white border border-gray-500 rounded-lg shadow ">
        <h5 className="mb-2 text-lg font-bold tracking-tight">
          Yenepoya Institution (2023)
        </h5>
        <p className="font-normal text-gray-500">
          Bachelor of computer Application (Big data analytics, Cloud computing
          and Cyber security)
        </p>
      </div>

      <div className="block max-w-2xl p-10 text-center mb-2 bg-gradient-to-r from-slate-300 to-white border border-gray-500 rounded-lg shadow ">
        <h5 className="mb-2 text-lg font-bold tracking-tight">
          Govinda Dasa P.U. College (2020)
        </h5>
        <p className="font-normal text-gray-500">Science PCMC</p>
      </div>

      <div className="block max-w-2xl p-10 text-center mb-4 bg-gradient-to-r from-slate-300 to-white border border-gray-500 rounded-lg shadow ">
        <h5 className="mb-2 text-lg font-bold tracking-tight">
          Al - Badriya English medium school (2018)
        </h5>
        <p className="font-normal text-gray-500">
          Primary and Secondary school
        </p>
      </div>
    </div>
  );
};

export default Education;
