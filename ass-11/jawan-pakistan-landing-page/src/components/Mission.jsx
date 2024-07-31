import React from "react";
import MISSION from "../assets/images/mission.png";

const MissionApp = () => {
  return (
    <main className="flex justify-center mx-56">
      <img className=' flex items-center mt-72 h-80 px-5 ' src={MISSION} width={900} height={900} />
      <div>
        <h2 className='text-3xl py-32 w-1/2 text-green-700 font-bold'>Mission And Vision Behind Jawan Pakistan</h2>
        {/* </div> */}
        <div  className='-mt-24'>
        <p className='w-1/1 text-gray-500 text-3l flex justify-between items-center'>
        Our vision is to bring our students into the 21st century through innovation and modern technology. To create a better every day life for every people. This program is not only impacting the youth in monetary perspective but it is also creating some deep-rooted, long-term psychological effects e.g. minimizing frustration among the unemployed youth.
        </p>
        <br /><br />
        <p className='w-1/1 text-gray-500 text-3l flex justify-between items-center'>
        Our mission is to provide high quality education that connects young people with opportunities to transform their lives. The educated youngsters who remain unemployed gets frustrated, depressed and disheartened when they do not succeed in getting their dream jobs. This training reinforces the educated youth to earn well through freelancing, develop variety of skills through specified domains and promote entrepreneurial culture that diverts youths potentials for constructive purposes. This energy diversion definitely make the youth more confident, self-reliant and constructive asset for a progressing economy.
        </p>
        </div>
        
        
      </div>
    </main>
  );
};

export default MissionApp;
