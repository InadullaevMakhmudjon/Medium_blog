import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ArticlesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin-bottom: 20px;
    padding: 0;
    display: flex;
    flex-flow: row nowrap;
    width:100%;
    
    &:hover{
        text-decoration:none;
    }

`;

export const ImageContainer = styled.div`
    width: 160px;
    height: 110px;
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

export const TextsHolder = styled.div`
    display: flex;
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

export const ArticleTitle = styled(Link)`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    color: black;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom:10px;

    &:hover {
        cursor: pointer;
        text-decoration:none;
        opacity:0.7;
        color:black;
    }
`;

export const SecondaryTitle = styled.h3`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 13px;
    font-weight: 300;
    line-height: 15px;
    color: grey;
`;

export const AuthorInfo = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    margin-top: 8px;
`;

export const AuthorName = styled.span`
    font-size: 13px;
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
    font-size: 13px;
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
    font-size: 12px;
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
    margin-left: 5px;
    img {
        width: 13px;
        height: 13px;
    }
`;
