import React from 'react';

function Avatar({ user, showName }) {
  return (
    <div className="avatar-component">
      <img className="avatar" src={user.avatar} alt="" />
      { showName && <h3 className="avatar-title">Sofia</h3>}
    </div>
  );
}

export default Avatar;