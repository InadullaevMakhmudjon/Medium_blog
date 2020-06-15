import styled from 'styled-components';


export const MainPageStyled = styled.div`
    font-weight: 400;
`;

export const Content = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items:flex-start;
    width:100%;
`;

export const BorderBottomStyled = styled.hr`
    border-bottom:1px solid #D5D7D8;
    margin:0;
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
