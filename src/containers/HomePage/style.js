import styled from 'styled-components';


export const MainPageStyled = styled.div`
    font-weight: 400;
    max-width:1440px;
    margin:auto;
`;

export const Content = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items:flex-start;
`;

export const HR = styled.hr`
    width: 95%;
    border: 0.8px solid #CCCCCC;
    @media screen and ( max-width: 700px ) {
        display: none;    
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: flex-end;
    padding-right: 100px;
    margin-top: -20px;
    @media screen and ( max-width: 750px ) {
        order: 3;
        margin-top: 30px;
    }
    @media screen and ( max-width: 1000px ) {
    justify-content: flex-start;
    margin-left: 20px;
    }
`;


export const LoaderWrapper = styled.div`
    display:flex;
    justify-content:center;
    border-bottom: 1px solid #D5D7D8;
`;
