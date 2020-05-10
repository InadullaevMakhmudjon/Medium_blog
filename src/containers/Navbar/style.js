import styled from 'styled-components';

import { Navbar, Nav } from 'react-bootstrap';


export const StyledNavbar = styled(Navbar)`
    width: 100%;
    height: 82px;
    border-top:  1.5px solid #D5D7D8;
    background-color: white;
    border-bottom: 1px solid #D5D7D8;
    top:0;
    z-index:5

`;


export const BrandContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
    @media screen and ( max-width: 800px ) {
        margin-left: 10px;
    }
    img {
        height: 30px;
        margin-right: 20px;
        &:hover {
            opacity: 0.5;
        }
    }
`;

export const BrandName = styled.div`
    width: 80px;
    height: fit-content;
    font-size: 16px;
    line-height: 15px;
    font-weight: 1000;
    overflow: none;
    border-left:  1.5px solid #D5D7D8;
    padding-left: 20px;
    @media screen and ( max-width: 800px ) {
        font-size: 12px;
    }
`;

export const StyledNav = styled(Nav)`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    font-size: 16px;
    padding-right: 30px;
    @media screen and ( max-width: 800px ) {
        padding-right: 0px;
    }
`;

export const StyledLink = styled.div`
    img {
        width: 25px;
        height: 25px;
        margin-left: 20px;
        @media screen and ( max-width: 800px ) {
            display: none;
        }
        &:hover {
            opacity: 0.5;
        }
    }

    display:flex;
    justify-content:center;
    align-items:center;

    a{
        color:#212529;
        opacity:0.8;
        margin-left:10px;
        
        &:hover{
            opacity:0.5;
        }
        
    }
`;

export const StyledAccountContainer = styled.div`
    img {
        &:hover {
            opacity: 0.8;
        }
    }

    display:flex;
    justify-content:center;
    align-items:center;

    a{
        color:#212529;
        opacity:0.8;
        margin-left:10px;
        
        &:hover{
            opacity:0.5;
        }
        
    }
`;

export const HR = styled.div`
    border-left:  1.5px solid #D5D7D8;
    margin-left: 30px;
    @media screen and ( max-width: 800px ) {
            display: none;
    }
`;

export const Active = styled.div`
    color: #C92805;
    @media screen and ( max-width: 800px ) {
        display: none;
    }
`;
