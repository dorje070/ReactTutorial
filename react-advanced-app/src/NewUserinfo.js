import React, { useEffect, useState } from 'react';

export default function NewUserinfo() {
  const [User, SetUser] = useState({});
  const [userId, setuserId] = useState(1);
  const userChange = (event) => {
    setuserId(event.target.value);
  };
  useEffect(() => {
    console.log('useEffect run');
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then((response) => response.json())
      .then((data) => {
        SetUser(data);
      });
    return () => {
      console.log('clean up');
    };
  }, [userId]);

  return (
    <div className="user">
      Userinfo:
      <input type="text" value={userId} onChange={userChange} />
      <br />
      Name: {User.name}
      <br />
      Email: {User.email}
    </div>
  );
}
