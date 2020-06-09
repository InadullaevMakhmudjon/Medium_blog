import styled from 'styled-components';


export const TopArticlesStyled = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    border-bottom:1px solid #D5D7D8;
    margin-bottom:20px;
    margin-top:20px;
    
    @media screen and ( max-width: 950px ) {
        padding-right: 20px;
        padding-left: 20px;
    } 
`;

export const ArticleMainPreview = styled.div`
    width: 35%;
    height: fit-content;
    @media screen and ( max-width: 1015px ) {
        width: 50%;
    }
    @media screen and ( max-width: 910px ) {
        width: 47%;
    }
    @media screen and ( max-width: 800px ) {
        width: 45%;
    }
    @media screen and ( max-width: 720px ) {
        width: 100%;
        order: 1;
        padding: 0px;
    }
`;

export const ArticleSecondPreview = styled.div`
    width: 30%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    @media screen and ( max-width: 1015px ) {
        width: 45%;
    }
    @media screen and ( max-width: 910px ) {
        width: 46%;
    }
    @media screen and ( max-width: 800px ) {
        width: 50%;
    }
    @media screen and ( max-width: 720px ) {
        width: 100%;
        order: 2;
        margin-top:20px;
    }
`;

export const ArticleThirdPreview = styled.div`
    width: 27%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    @media screen and ( max-width: 1015px ) {
        display: none;
    }
`;
