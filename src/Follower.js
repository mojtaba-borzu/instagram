import React from 'react';

function Follower({item}) {
  return (
    <div className="w-3/4 pl-4">
      {item.map (items => (
        <div className="flex flex-row my-2">
          <div className="flex flex-wrap content-center w-10 border-2 rounded-full">
            {items.image}
          </div>
          <div className="flex flex-wrap content-center pl-4">
            {items.userName}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Follower;
