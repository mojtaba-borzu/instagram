import React from 'react';

import Nav from './Nav';
import ScrollUser from './ScrollUser';
import ViewDetails from './ViewDetails';
// import { GoSearch } from "react-icons/go";

function Instagram () {
  // const search=<GoSearch/>
  return (
    <div className="flex justify-items-center flex-col">
      <div className="flex justify-center"> <Nav /></div>

      <div className="flex flex-row justify-center ">
        <div className="flex justify-center w-3/4">
          <div className=" flex justify-center w-3/5">
            <div className="bg-red-200"><ScrollUser /></div>
          </div>
          <div className="flex justify-center w-2/5">
            <div className="bg-green-200">
              <ViewDetails className="h-20 bg-pink-300" />
              <div className="h-20 bg-blue-200">text</div>
              <div className="h-40 bg-yellow-200">followers</div>
              <div className="bg-blue-200 content-end h-20">footer</div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Instagram;
