import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { Navbar, Nav } from 'react-bootstrap';
import UserDropdown from '../UserDropdown';

import { getUser } from '../../redux/modules/user/userAction';

import {
  StyledNavbar,
  BrandContainer,
  BrandName,
  StyledNav,
  StyledLink,
  HR,
  Active,
  StyledAccountContainer
} from './style';

import BrandLogo from '../../assets/images/logo.png';
import IconSearch from '../../assets/icons/search.svg';


const NavbarMain = ({
  token,
  getUser,
  user
}) => {
  const handleCheckUser = (token) => {
    const { userId } = jwtDecode(token);
    if (userId) {
      getUser(userId);
    }
  };

  useEffect(() => {
    if (token) {
      handleCheckUser(token);
    }
  }, [token]);


  return (
    <>
      <StyledNavbar>
        <BrandContainer>
          <Link to="/">
            <img src={BrandLogo} alt="icon-brand" />
          </Link>

        </BrandContainer>
        <StyledNav className="mr-auto">
          <StyledLink>
            <Nav.Link href="#"><Active>Subscribe</Active></Nav.Link>
          </StyledLink>
          <StyledAccountContainer>
            {user && user.id === 1 ? <Link to="/login">Sign In</Link> : <UserDropdown user={user} />}

          </StyledAccountContainer>
          <HR />
          <StyledLink>
            <Nav.Link href="#">
              <img src={IconSearch} alt="icon-search" />
            </Nav.Link>
          </StyledLink>
        </StyledNav>
      </StyledNavbar>
    </>
  );
};

const mapStateToProps = (state) => ({
  token: state.authReducer.token,
  user: state.userReducer.user
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (token) => dispatch(getUser(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMain);
