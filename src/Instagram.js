import React from 'react';

import Nav from './Nav';
// import { GoSearch } from "react-icons/go";

function Instagram () {
  // const search=<GoSearch/>
  return (
    <div className="w-full justify-center">
      <Nav />
      <div className="bg-red-200 h-4/6 ">main</div>
      <div className="bg-blue-200 content-end h-52">footer</div>

    </div>
  );
}

export default Instagram;
