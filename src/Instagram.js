import React from 'react';
import Followers from './Followers';

import Nav from './Nav';
import ScrollUser from './ScrollUser';
import ViewDetails from './ViewDetails';
// import { GoSearch } from "react-icons/go";

function Instagram () {
  // const search=<GoSearch/>
  return (
    <div className="flex justify-items-center flex-col bg-gray-100">
      <div className="flex justify-center bg-white"> <Nav /></div>

      <div className="flex flex-row justify-center  ">
        <div className="flex justify-center w-3/4">
          <div className=" flex flex-col w-3/5">

            <div className="flex justify-center  m-6 bg-white">
              <ScrollUser />
            </div>
            <div className="flex justify-center mx-6 h-4/5 bg-white">
              main
            </div>

          </div>
          <div className="flex flex-col w-2/5 m-4 text-sm">
            <div className="flex flex-row mt-2 w-3/4">
              <div className="w-3/4"> <ViewDetails /></div>

              <div className="flex flex-wrap content-center w-1/4 text-blue-600 ">
                <a href="#a">Switch</a>
              </div>
            </div>

            <div className="flex flex-col justify-start h-60  w-3/4">
              <div className="flex flex-row justify-around">
                <div className="w-3/4 pl-4">Suggestions For You</div>
                <div className="flex  justify-start w-1/4">
                  <a href="#a">See all</a>
                </div>
              </div>

              <div className="  h-40 ">
                <Followers />
                <Followers />
                <Followers />
                <Followers />

              </div>
            </div>

            <div className="flex flex-col  content-end h-20 my-6 text-gray-400 w-3/4 text-sm">
              <p>
                About Help Press API Jobs Privacy Terms Locations Top Accounts Hashtags Language English
              </p>
              <p className="my-6">© 2021 INSTAGRAM FROM FACEBOOK</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Instagram;
