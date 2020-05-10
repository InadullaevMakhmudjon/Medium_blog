import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import fallbackProfileImg from '../../assets/icons/profile.svg';

import {
  UserAreaContainer,
  UserAvatarContainer,
  DropDownList,
  ReactImageStyled
} from './style';


const UserDropdown = ({ user, handleLogout }) => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    /**
       * Alert if clicked on outside of element
       */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);

  return (
    <>
      {
        user && (
          <UserAreaContainer ref={ref}>
            <UserAvatarContainer onClick={() => setActive(!active)}>
              <ReactImageStyled
                src={user.image}
                fallbackImage={fallbackProfileImg}
                alt="profile image"
              />
            </UserAvatarContainer>
            <DropDownList active={active}>
              <li><Link to="/my-profile">My Profile</Link></li>
              <li><a role="button" tabIndex={0} onClick={handleLogout} onKeyDown={handleLogout}>Logout</a></li>
            </DropDownList>
          </UserAreaContainer>
        )
      }
    </>

  );
};


export default UserDropdown;
