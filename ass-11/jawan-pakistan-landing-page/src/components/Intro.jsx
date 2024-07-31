import React from "react";
import INTRO from "../assets/images/intro.png";

const IntroApp = () => {
  return (
    <main className=" mx-56 justify-center">
      <div className="text-3xl py-32 w-1/4 text-green-700 font-bold">
        Introduction To Jawan Pakistan
      </div>
      <div className="flex -mt-32">
        <p className="w-1/1 text-gray-500 text-3l flex justify-between items-center">
          The foundation of every state is the education and skills set of its
          youth. Jawan Pakistan is such an organization of Pakistan who is not
          only working on youth education but also enhancing skills set in youth
          either Free of cost or in a very low cost. This initiative, initially
          developed by a single person and with almost no seed capital, promotes
          entrepreneurship and innovation and Sustainable Development Goal,
          which promotes inclusive and sustainable economic growth.
        </p>
        <img
          className=" flex items-center -mt-20 h-80 px-5 py-5 "
          src={INTRO}
          width={700}
        />
      </div>
      <div></div>
    </main>
  );
};

export default IntroApp;
