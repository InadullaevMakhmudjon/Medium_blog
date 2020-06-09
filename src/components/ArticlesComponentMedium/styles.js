import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArticlesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;

  
`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 180px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const TextsHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 70px;
    margin-right: 25px;

    @media screen and ( max-width: 1119px ) {
        margin-left: 0;
    }

    @media screen and ( max-width: 720px ) {
        width:100%;
        margin-right:0px;
    }
`;

export const ArticleTitle = styled(Link)`
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: black;
    padding-top: 12px;

    &:hover {
        cursor: pointer;
        color:inherit;
        text-decoration:none;
        opacity:0.7;
    }
    @media screen and ( max-width: 750px ) {
        font-size: 18px;
    }
`;

export const SecondaryTitle = styled.h3`
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;
    color: grey;
`;

export const AuthorInfo = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
`;

export const AuthorName = styled.span`
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    margin-right: 5px;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const AuthorLocation = styled.span`
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
    color:#212529;
    text-transform:uppercase;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
        opacity:0.8;
        color:inherit;
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
    font-size: 12px;
    color: #757575;
    margin-right: 5px;
`;

export const TimeOfReading = styled.span`
    font-size: 12px;
    color: #757575;
`;

export const StarIcon = styled.div`
    margin-left: 5px;
    display:flex;
    img {
        width: 13px;
        height: 13px;
    }
`;
