import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ClampLines from 'react-clamp-lines';

export const ArticlesContainer = styled.div`
    margin-bottom: 20px;
    padding: 0;
    display: flex;
    &:hover{
        text-decoration:none;
    }

`;

export const ImageContainer = styled.div`
    width: 160px;
    height: 110px;
    display:  flex;
    flex:1;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        min-width:100px;
        min-height:100px;
        max-width:120px;
        max-height:120px;
    }
    @media screen and ( max-width: 720px ) {
        order: 3;
    }
    @media screen and ( max-width: 800px ) {
        width: 150px;
        height: 120px;
    }
    @media screen and ( max-width: 500px ) {
        width: 110px;
        height: 70px;
    }
`;

export const TextsHolder = styled.article`
    display: flex;
    flex:3;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    margin-right: 10px;
    @media screen and ( max-width: 720px ) {
        margin-right: 10px;
        margin-left: 0;
        width:100%;
    }
`;

export const ArticleTitle = styled.h1`
    font-size: 1.1rem;
    font-weight: 600;
    color: black;
    margin-bottom:10px;

    & a{
        color:#111;

    }

    & a:hover {
        cursor: pointer;
        text-decoration:none;
        opacity:0.7;
        color:black;
    }
`;

export const SecondaryTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
    color: #212529;
`;

export const AuthorInfo = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    margin-top: 8px;
`;

export const AuthorName = styled.span`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 5px;
    @media screen and ( min-width: 1050px ) and ( max-width: 1065px ) {
        margin-right: 0px;
    }
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const AuthorLocation = styled(Link)`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    text-transform:uppercase;
    color:#212529;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
        color:#212529;
        opacity:0.8;
    }
`;

export const PublishInfo = styled.div`
    width:  fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const PublishDate = styled.span`
    font-size: 16px;
    color: #757575;
    margin-right: 5px;
`;

export const TimeOfReading = styled.span`
    font-size: 12px;
    color: #757575;
`;

export const ImgWrapper = styled.div`

    @media screen and ( max-width: 720px ) {
        display: block;
        order: 2;
    }

    img {
        width: 20px;
        height: 25px;
        margin-top: 77px;
        margin-right: 15px;
        &:hover {
            cursor: pointer;
        }
    }
`;

export const StarIcon = styled.div`
    display:flex;
    margin-left: 5px;
    img {
        width: 13px;
        height: 13px;
    }
`;


export const ClampLinesStyled = styled(ClampLines)`
    & button{
        display:none;
    }
`;
