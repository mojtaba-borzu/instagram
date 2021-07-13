import React from 'react';
import Follower from './Follower';

function Followers () {
  const data = [
    {
      image: (
        <img
          className="w-10 rounded-full"
          alt="user"
          src="https://media-exp3.licdn.com/dms/image/C5603AQF2qjNTfJRcIA/profile-displayphoto-shrink_200_200/0/1620764349101?e=1629331200&v=beta&t=tELDfafdUprAjKpCrT2xsEu76hVC6zZ69EDBgBe2qYU"
        />
      ),
      userName: 'arshia',
    },
  ];
  return (
    <div className="flex flex-row ">
      <Follower item={data} />
      <div className="flex flex-wrap content-center w-1/4 text-blue-500">
        <a href="#a">Follow</a>
      </div>
    </div>
  );
}

export default Followers;
