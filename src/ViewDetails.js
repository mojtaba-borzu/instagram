import React, {useState} from 'react';

function ViewDetails () {
  const [user, setUser] = useState ([
    {
      image: (
        <img
          className="rounded-full w-16 "
          src="https://media-exp3.licdn.com/dms/image/C5603AQF2qjNTfJRcIA/profile-displayphoto-shrink_200_200/0/1620764349101?e=1629331200&v=beta&t=tELDfafdUprAjKpCrT2xsEu76hVC6zZ69EDBgBe2qYU"
          alt="user"
        />
      ),
      userName: 'Rox.setup',
      idName: 'rox.setup',
    },
  ]);
  return (
    <div>
      <div className="flex justify-start  h-20  ">
        {user.image}
        {user.userName}
        {user.idName}
        {user.map (users => (
          <div className="flex flex-row ">
            <div>
              <div className="rounded-full w-16 border-2 border-color-green-200 my-2 mx-4">
                {users.image}
              </div>
            </div>

            <div className="flex flex-col pt-4">
              <div className="flex  justify-center">
                <a href="#a"> {users.userName}</a>

              </div>
              <div className="flex justify-center">
                {users.idName}
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default ViewDetails;
