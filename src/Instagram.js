import React from 'react';
import {TiHomeOutline, TiHome} from 'react-icons/ti';
import {
  RiSendPlaneFill,
  RiSendPlaneLine,
  RiCompass3Fill,
  RiCompass3Line,
  RiHeart3Line,
  RiHeart3Fill,
} from 'react-icons/ri';
// import { GoSearch } from "react-icons/go";

function Instagram () {
  const home = 0;
  const direct = 1;
  const safari = 1;
  const like = 1;
  // const search=<GoSearch/>
  return (
    <div className="w-full justify-center">
      <div className="bg-black-100 w-full content-start h-12 inline-flex justify-evenly items-center">
        <div className="">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="instagram "
          />
        </div>
        <div className="justify-items-center">
          <input
            className="justify-items-center border-2 text-center"
            type="text"
            placeholder="search"
          />
        </div>
        <div className="inline-flex justify-between">
          <div className="text-3xl w-12 ">
            <a href="#a">
              {home === 1
                ? <TiHomeOutline />
                : <TiHome className="hover:text-blue-800" />}
            </a>
          </div>
          <div className="text-3xl w-12 ">
            <a href="#a">
              {direct === 1
                ? <RiSendPlaneLine className="hover:text-blue-800" />
                : <RiSendPlaneFill />}
            </a>
          </div>
          {' '}
          <div className="text-3xl w-12 ">
            <a href="#a">
              {safari === 1
                ? <RiCompass3Line className="hover:text-blue-800" />
                : <RiCompass3Fill />}
            </a>
          </div>
          <div className="text-3xl w-12 ">
            <a href="#a">
              {like === 1
                ? <RiHeart3Line className="hover:text-blue-800" />
                : <RiHeart3Fill />}
            </a>
          </div>
          <div className="w-12 ">
            <a href="#a">
              <img
                className="rounded-full h-7 border-2 hover:border-blue-800"
                src="https://media-exp3.licdn.com/dms/image/C5603AQF2qjNTfJRcIA/profile-displayphoto-shrink_200_200/0/1620764349101?e=1629331200&v=beta&t=tELDfafdUprAjKpCrT2xsEu76hVC6zZ69EDBgBe2qYU"
                alt="userName"
              />
            </a>
            {' '}
          </div>
        </div>

      </div>
      <div className="bg-red-200 h-4/6 ">main</div>
      <div className="bg-blue-200 content-end h-52">footer</div>

    </div>
  );
}

export default Instagram;
