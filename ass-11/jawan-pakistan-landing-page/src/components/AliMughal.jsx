import React from "react";
import ALI from "../assets/images/alimughal.jpg";
import { FaQuoteRight } from "react-icons/fa";

const AliMughal = () => {
  return (
    <div>
      <div className="flex justify-center py-32">
        <img className="rounded-full items-center" width={200} src={ALI}></img>
      </div>
      <div>
        <h1 className="text-green-700 font-bold text-5xl text-center -mt-20 ">
          MUHAMMAD ALI MUGHAL
        </h1>
        <p className="text-gray-500 text-3l text-center mt-8">
          Founder of Jawan Pakistan
        </p>
        <div className="flex justify-center text-3xl">
          <FaQuoteRight className="text-gray-500 text-3l mt-8" />
        </div>
        <div className="flex justify-center mt-8">
          <p className="w-2/6 text-gray-500 text-3l">
            We aim to be most efficient provider of business process outsourcing
            services by setting the industry standards for cost and quality of
            services. Our long term success will be driven by our relentless
            focus on recruiting and developing the most talented pool of human
            capital in our industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AliMughal;
