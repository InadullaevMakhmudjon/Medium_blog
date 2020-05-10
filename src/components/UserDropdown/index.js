import React, { useState } from 'react';

import {
  UserAreaContainer,
  UserAvatarContainer,
  DropDownList
} from './style';


const UserDropdown = ({ user }) => {
  const [active, setActive] = useState(false);
  return (
    <UserAreaContainer>
      <UserAvatarContainer onClick={() => setActive(!active)}>
        <img src="" />
      </UserAvatarContainer>
      <DropDownList active={active}>
        <li><a href="#">My Profile</a></li>
        <li>
          <a href="#">Notifications</a>
        </li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </DropDownList>
    </UserAreaContainer>
  );
};


export default UserDropdown;
