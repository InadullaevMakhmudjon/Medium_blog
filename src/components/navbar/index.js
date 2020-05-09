import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

import {
  StyledNavbar,
  BrandContainer,
  BrandName,
  StyledNav,
  StyledLink,
  HR,
  Active
} from './style';

import BrandLogo from '../../assets/images/logo.png';
import IconSearch from '../../assets/icons/search.svg';


const NavbarMain = () => (
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
        <StyledLink>
          <Link to="/login">Sign In</Link>
        </StyledLink>
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

export default NavbarMain;
