import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';


export const StyledNav = styled(Nav)`
    width: 100%;
    height: 36px;
    border-bottom: 1px solid #D5D7D8;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top:0;
    background:#fff;
    z-index:5;
`;

export const CarouselWrapper = styled.div`
    max-width:800px;
    width:100%;
    display:block;
    margin:auto;

    @media (max-width: 1024px) {
        max-width:750px;
    
        & .slick-prev:before, .slick-next:before{
           color:#212529;
        }
    }
    @media (max-width: 900px) {
        max-width:650px;
    }
    
    @media (max-width: 767px) {
        max-width:550px;
    }

    @media (max-width: 600px) {
        max-width:400px;
    }

    @media (max-width: 500px) {
        max-width:300px;
    }

    @media (max-width: 350px) {
        max-width:250px;
    }
    
}


`;

export const LinkContainer = styled.div`
    width:100%;
`;

export const LinkStyled = styled(Link)`
    font-size: 15px;
    color: black;
    margin-left: 10px;
    margin-right: 10px;
    &:hover {
        cursor: pointer;
        color: black;
        opacity: 0.5;
        text-transform:none;
        text-decoration:none;
    }
`;
