import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { Navbar, Nav } from 'react-bootstrap';
import UserDropdown from '../../components/UserDropdown';

import { useWindowSize } from '../../hooks/use-window-size';

import { getUser } from '../../redux/modules/user/userAction';
import { logout } from '../../redux/modules/auth/authActions';

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
import BrandLogoMobile from '../../assets/icons/logo_small.svg';
import IconSearch from '../../assets/icons/search.svg';


const NavbarMain = ({
  token,
  getUser,
  user,
  logout,
  history
}) => {
  const size = useWindowSize();

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


  const handleLogout = () => {
    logout(history);
  };
  console.log(size.width);
  return (
    <>
      <StyledNavbar>
        <BrandContainer>
          <Link to="/">
            {size.width > 767 ? <img src={BrandLogo} alt="icon-brand" /> : <img src={BrandLogoMobile} alt="icon-brand" />}
          </Link>

        </BrandContainer>
        <StyledNav className="mr-auto">
          <StyledLink>
            <Nav.Link href="#"><Active>Subscribe</Active></Nav.Link>
          </StyledLink>
          <StyledAccountContainer>
            {user && user.id === 1 ? <Link to="/login">Sign In</Link> : <UserDropdown user={user} handleLogout={handleLogout} />}
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
  getUser: (token) => dispatch(getUser(token)),
  logout: (history) => dispatch(logout(history))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarMain));
