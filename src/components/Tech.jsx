import React from "react";

import { BallCanvas } from "./canvas";

import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div
          className="bg-slate-700 shadow-sm shadow-green-200 p-3 flex justify-center items-center rounded-full"
          key={technology.name}
        >
          {/* <BallCanvas icon={technology.icon} /> */}
          <img className="" width={70} src={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
