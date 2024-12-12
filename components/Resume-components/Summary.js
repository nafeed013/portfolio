import React from "react";

const Summary = ({ selectedTab }) => {
  return (
    <div className={selectedTab === 1 ? "block" : "none"}>
      <div className="block max-w-2xl text-center p-10 mb-2 bg-gradient-to-r from-slate-300 to-white border border-gray-500 rounded-lg shadow ">
        <h5 className="mb-2 text-lg font-bold tracking-tight">About me</h5>
        <p className="font-normal text-gray-500">
          A highly skilled Front-End Developer with expertise in building
          responsive, use-friendly web applications. Proficient in HTML, CSS,
          JavaScript and modern frameworks like React, Next.
        </p>
      </div>

      <div className="block max-w-2xl p-10 text-center mb-2 bg-gradient-to-r from-slate-300 to-white border border-gray-500 rounded-lg shadow ">
        <h5 className="mb-2 text-lg font-bold tracking-tight">
          Contact details
        </h5>
        <ul className="font-normal text-gray-500">
          <li>Phone : +91 7349422401</li>
          <li>Email : mohammadnafeed013@gmail.com</li>
          <li>
            Address : D.no. 7-72b/1, Site no. 136, H.I. Cottage <br /> 7th Block
            Krishnapura, Mangalore, India - 575014
          </li>
        </ul>
      </div>

      <div className="block max-w-2xl p-10 text-center bg-gradient-to-r from-slate-300 to-white border border-gray-500 rounded-lg shadow ">
        <h5 className="mb-2 text-lg font-bold tracking-tight">Skills</h5>
        <ul className="font-normal text-gray-500">
          <li>HTML5</li>
          <li>CSS3 - Bootstrap, Tailwind</li>
          <li>JavaScript - React JS, Redux, Next JS</li>
          <li>Version control - Git, GitHub</li>
        </ul>
      </div>
    </div>
  );
};

export default Summary;
