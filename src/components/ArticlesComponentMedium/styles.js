import styled from 'styled-components';
import ClampLines from 'react-clamp-lines';

export const ArticlesContainer = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 0;
    padding: 0;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    
    &:hover{
        cursor:pointer;
    }
  
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

export const TextsHolder = styled.article`
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

export const ArticleTitle = styled.h1`
    font-size: 1.3rem;
    padding-top: 12px;
    margin-bottom:10px;
    font-weight:600;
    
    & a{
        color: #111;
    }

    & a:hover{
        text-decoration:none;
    }

    &:hover {
        cursor: pointer;
        color:inherit;
        text-decoration:none;
        opacity:0.7;
    }
    @media screen and ( max-width: 750px ) {
        font-size: 1.5rem;
    }
`;

export const SecondaryTitle = styled.h3`
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    color: #212529;
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
    font-size: 1rem;
    font-weight: 400;
    color:#212529;
    text-transform:uppercase;
    line-height:20px;

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
    font-size: 1rem;
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


export const ClampLinesStyled = styled(ClampLines)`
    & button{
       display:none;
    }
`;
